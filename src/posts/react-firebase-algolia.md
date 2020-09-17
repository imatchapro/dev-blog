---
title: 'Cloud Functionsを利用してCloud Firestoreに追加するデータを同時にalgoliaにも追加する'
published: '2020-09-15'
tldr: 'Cloud Functionsを利用して、Cloud Firestoreに追加するデータを同時に全文検索サービスのalgoliaにも追加する方法を解説します'
---

## はじめに

すでに**Firebase CLI**を使用して開発を行っている環境を前提に解説をします。この解説で使用している開発言語はTypeScriptとなります。

- <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/cli?hl=ja">Firebase CLI リファレンス</a>

### algoliaについて

algoliaは、検索機能をAPIとして提供している SaaS（Software as a Service）です。

- <a target="_blank" rel="noopener noreferrer" href="https://www.algolia.com/doc/guides/getting-started/what-is-algolia/">What Is algolia? | Getting Started | Guide | algolia Documentation</a>

## 目次

1. Firebase Authenticationでユーザー登録（アカウント作成）の機能を追加
2. 登録されたユーザーデータをCloud Firestoreに追加
3. Cloud Functionsでデータの追加を検知して、algoliaにデータを追加

### Firebase Authenticationでユーザー登録（アカウント作成）の機能を追加

Firebaseでプロジェクトの登録が完了したら、`firebase.ts`を作成します。

FirebaseのAPIキーなどの情報はFirebaseのコンソールの「設定 ＞ プロジェクトと設定」に記載されています。

```typescript
// firebase.ts

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
```

APIキーなどは環境変数として`.env`にまとめておきましょう。

```shell script
# .env

REACT_APP_API_KEY=XXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=XXXXXXXXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://XXXXXXXXXXX.firebaseio.com
REACT_APP_PROJECT_ID=XXXXXXXXXXX
REACT_APP_STORAGE_BUCKET=XXXXXXXXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID=XXXXXXXXXXX
REACT_APP_APP_ID=XXXXXXXXXXX
REACT_APP_MEASUREMENT_ID=G-XXXXXXXXXXX
```

#### ログインに使用するプロパイダを有効にする

ログインはメールアドレスとパスワードで行えるようにします。  
**Firebase Authentication**のコンソール画面から**Sign-in method**のタブに移動して、**メール／パスワード**を有効にします。  
これで、ユーザーがメールアドレスとパスワードを入力することで、アカウントの作成を行えるようになりました。

#### サインアップの機能を実装する

サインアップを行うページのコンポーネントとして`SignUp.tsx`を作成します。

ここでのフォームの実装はシンプルなものですが、実際にアプリケーションを開発する場合は、バリデーションやレンダリングのパフォーマンスを踏まえて<a href="https://react-hook-form.com/jp/" target="_blank" rel="noopener noreferrer">React Hook Form</a>などのライブラリを使用することをオススメします。

```tsx
// pages/SignUp.tsx

import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form>
      <div>
        <label htmlFor="">メールアドレス</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          name="password"
          id="password"
          value={email}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">サインアップ</button>
    </form>
  );
};

export default SignUp;
```

`useState`を使用して簡単なフォームを実装しました。

次に、Firebase AuthenticationとCloud FirestoreのAPIを使用して、ユーザー登録（アカウント作成）とデータベースにユーザーデータの追加する処理を追加します。

```tsx
import React, { useState } from 'react';
import firebase from 'lib/firebase';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event): void => {
    event.preventDefault();

    if (email !== '' && password !== '') {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .set({
                userId: user.uid,
                email: email,
              })
              .catch(({ message }) => console.error(message));
          }
        })
        .catch(({ message }) => console.error(message));
    }
  };

  return <form onSubmit={handleSubmit}>{/* 省略 */}</form>;
};

export default SignUp;
```

まずはユーザー登録（アカウント作成）の処理の部分を見ていきましょう。

```tsx
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(({ user }) => {
    // アカウント作成後の処理
  })
  .catch(({ message }) => console.error(message));
```

`createUserWithEmailAndPassword`の引数に`email`と`password`を渡して新しいアカウントを作成します。

`createUserWithEmailAndPassword`はPromiseを返すので、アカウント作成後の処理を`then`で記述することが可能です。アカウント作成の処理が成功すると作成したアカウントのユーザーデータを返します。

- <a href="https://firebase.google.com/docs/auth/web/password-auth?hl=ja" target="_blank" rel="noopener noreferrer">JavaScriptでパスワードベースのアカウントを使用してFirebase認証を行う</a>

### 登録されたユーザーデータをCloud Firestoreに追加

次に、データベース（Cloud Firestore）にユーザーデータを追加する処理の部分を見ていきましょう。

```tsx
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(({ user }) => {
    if (user) {
      /* ここからユーザーデータをデータベースに追加する処理 */
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          userId: user.uid,
          email: email,
        })
        .catch(({ message }) => console.error(message));
    }
  })
  .catch(({ message }) => console.error(message));
```

`firebase`からのメソッドチェーンが行っている処理を順番に説明します。

- `collection('users')`で、usersコレクションを作成。
- `doc(user.uid)`で、usersコレクション内にユーザーに割り当てられたユニークIDのドキュメントを作成。
- `set({object})`で、ドキュメント内に`userId`と`email`のプロパティを持ったオブジェクトをセットしています。

#### Cloud Firestoreのセキュリティルールを追加する

Cloud Firestoreはデータの書き込みや削除の権限を`firestore.rules`で設定することができます。下記のサンプルコードは、例なので要件に応じて変更してください。

- <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/firestore/security/get-started">Cloud Firestoreセキュリティルールを使ってみる</a>

```shell script
# firestore.rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow write, delete: if request.auth != null && request.auth.uid == userId;
      allow create, update, read: if request.auth != null;
    }
  }
}
```

### Cloud Functionsでデータの追加を検知して、algoliaにデータを追加

algoliaのユーザー登録が完了していない場合は<a target="_blank" rel="noopener noreferrer" href="https://www.algolia.com/">こちらから</a>登録を行ってください。

#### algoliaにIndexを追加する

algoliaのコンソール画面のサイドバーの**Indices**からIndexの作成を行います。

名前は何でも構いませんが、Cloud Firestoreのコレクションと合わせるためにusersという名前でIndexを作成しましょう。

#### algoliaのAPIを使用する準備をする

algoliaのJavaScript APIをインストールします。

```shell script
yarn add algoliasearch
```

`algoliasearch`のインストールが完了したら、`algolia.ts`を作成します。

APIキーなどはalgoliaのコンソール画面のサイドバーの**API Keys**に記載されています。

```typescript
// algolia.ts

import algoliasearch from 'algoliasearch'

const appId = `${process.env.REACT_APP_ALGOLIA_APP_ID}`
const apiKey = `${process.env.REACT_APP_ALGOLIA_SEARCH_ONLY}`

export const algoliaClient = algoliasearch(appId, apiKey);
```

APIキーなどは環境変数として`.env`にまとめておきましょう。

```shell script
# .env

REACT_APP_ALGOLIA_APP_ID=XXXXXXXXXX
REACT_APP_ALGOLIA_ADMIN_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_ALGOLIA_SEARCH_ONLY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### Cloud Functionsの設定を行う

**Firebase CLI**を使用してプロジェクトにCloud Functionsの開発環境を追加します。

```shell script
firebase init functions
```

ターミナルから`firebase init functions`を実行すると、TypeScriptを使用するか問われるので、使用する場合はYesを選択します。

実行が完了すると、`functions`ディレクトリが作成されているはずです。

##### functionsディレクトリ内のTypeScriptのコンパイル設定を追加

`functions/package.json`の`scripts`に設定を追加します。

```shell script
{
  "name": "functions",
  "scripts": {
    "build": "tsc"
  }
}
```

##### firebase.jsonのfunctionsの設定を変更する

実行環境でTypeScriptを使用することはできないので、Functionsをデプロイする前にTypeScriptのビルドを行わなければなりません。
  
Cloud Functionsのデプロイ時に`functions`のTypeScriptのコンパイルを行うように、`firebase.json`の`functions`の項目にデプロイフックを追加します。

```shell script
{
  "functions": {
    "predeploy": "yarn --cwd \"$RESOURCE_DIR\" run build",
    "source": "functions"
  }
}
```

- <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/functions/typescript">Cloud FunctionsにTypeScript を使用する</a>

#### Cloud Functionsの関数を追加する

まずは、`functions`にalgoliaのJavaScript APIの`algoliasearch`と`firebase-admin`をインストールを行います。

```shell script
yarn add algoliasearch firebase-admin
```

次に、Cloud FunctionsにalgoliaのAPIキーを設定を行います。  
こうすることで、APIキーを隠蔽しつつ、Cloud FunctionsでAPIキーが使えるようになります。

- <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/functions/config-env?hl=ja">環境の構成</a> 

```shell script
firebase functions:config:set algolia.app_id="ALGOLIA APP ID" algolia.api_key="ALGOLIA API KEY"
```

そして、本題のCloud Firestoreのuserコレクションにデータが追加されたことを検知して、algoliaにもデータを追加する関数を`functions/lib/index.ts`に追加します。

```typescript
// index.ts

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import algoliasearch from 'algoliasearch'

// サーバーサイドでFirebaseに操作の権限を与える
admin.initializeApp(functions.config().firebase)

// algoliasearch関数にFunction Configに登録したalgoliaのAPIキーを引数として渡す
const client = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
)

// algoliaで作成したIndexを指定
const index = client.initIndex('users')

// Cloud FunctionsとしてonUsersDataCreatedを作成
exports.onUsersDataCreated = functions.firestore.document('users/{userId}')
  .onCreate((snap, context) => {
    const users = snap.data()

    // algoliaにデータを追加するには、オブジェクトにobjectIDプロパティを作成する必要がある
    users.objectID = context.params.userId

    // 実行したい処理を返す
    return index.saveObject(users)
})
``` 

最後にCloud Functionsをデプロイして完了です。

```shell script
firebase deploy --only functions
```
