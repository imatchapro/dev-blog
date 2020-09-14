---
title: 'Next.jsでHead要素用のコンポーネントを作成する'
published: '2020-09-13'
tldr: 'head要素を追加するためにNext.jsが提供している組み込みコンポーネントnext/headを利用して、柔軟に独自のheadタグを追加できるようにするTIPS'
---

## はじめに

Next.js で静的サイトを作成する際に、SEO の観点から OGP やディスクリプションなどの設定が必ず必要になることが多いのでメモとして残しつつ、共有します。

## 前提知識

Next.js ではページコンポーネントに head 要素を追加することができる `next/head` という組み込みコンポーネントを提供しており、開発者は普通のコンポーネントを追加するように、ページに head 要素を追加することができます。

```jsx
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default IndexPage;
```

SEO フレンドリーなウェブサイトにするためには、head 要素に ディスクリプション や OGP などの情報を設定が必要不可欠です。

この`next/head`を利用して OGP の設定を簡単に行えるコンポーネントを作成します。

## サンプルコード

ここではコンポーネント名を CustomHead としていますが、特に指定はないので何でも構いません。言語は TypeScript です。

```typescript jsx
import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  contentsType: string;
  url: string;
  image: string;
};

const SITE_NAME = 'your site name';
const TWITTER_ID = '@twitter_id';

const CustomHead: React.FC<Props> = ({
  title,
  description,
  contentsType,
  url,
  image,
}): JSX.Element => (
  <Head>
    <title>{title + ' | ' + SITE_NAME}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="YOUR SITE COLOR" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={contentsType} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={TWITTER_ID} />
    <meta name="twitter:creator" content={TWITTER_ID} />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={url} />
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  </Head>
);

export default CustomHead;
```

作成した CustomHead コンポーネント（以下、CustomHead）を任意のページコンポーネントにインポートし、Props に必要なデータを設定します。

```typescript jsx
const IndexPage: NextPage = () => (
  <div>
    <CustomHead
      title="タイトル"
      description="ディスクリプション"
      contentsType="website"
      url="https://example.com"
      image="/example.jpg"
    />
    <p>Hello world!</p>
  </div>
);

export default IndexPage;
```

このようにページコンポーネントにインポートした CustomHead に対して Prop を渡すだけで、カスタマイズした Head 要素をページに追加することができます。

普通のコンポーネントの作成と考え方は変わらず単純なので、Next.js でウェブサイトを作成するときには、このようなコンポーネントを作成しておくと良いでしょう。

## 注意点

\_document.{jsx, tsx}で`next/document`を使用して Head コンポーネントに title タグなどを指定している場合は、CustomHead の title タグと競合します。（title タグが２つ設置されてしまう）

空気を読んで title タグをマージしてくれることは今の所なさそうなので、場合に応じてどちらかのタグを削除するようにしてください。

## 参考にしたサイト

- <a href="https://nextjs.org/docs/api-reference/next/head" target="_blank" rel="noreferrer">next/head | Next.js</a>
