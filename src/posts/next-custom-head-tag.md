---
title: 'Next.jsでHead要素用のコンポーネントを作成する'
published: '2020-09-13'
tldr: 'head要素を追加するためにNext.jsが提供している組み込みコンポーネントnext/headを利用して、柔軟に独自のheadタグを追加できるようにするTIPS'
---

## はじめに

Next.jsで静的サイトを作成する際に、SEOの観点からOGPやディスクリプションなどの設定が必ず必要になることが多いのでメモとして残しつつ、共有します。

## 前提知識

Next.jsではページコンポーネントにhead要素を追加することができる`next/head`という組み込みコンポーネントを提供しており、開発者は普通のコンポーネントを追加するように、ページにhead要素を追加することができます。

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

SEOフレンドリーなウェブサイトにするためには、head要素にディスクリプションやOGPなどの情報を設定が必要不可欠です。

この`next/head`を利用してOGPの設定を簡単に行えるコンポーネントを作成します。

## サンプルコード

ここではコンポーネント名をCustomHeadとしていますが、特に指定はないので何でも構いません。言語はTypeScriptです。

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

const CustomHead: React.FC<Props> = ({title, description, contentsType, url, image}): JSX.Element => (
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

作成したCustomHeadコンポーネント（以下、CustomHead）を任意のページコンポーネントにインポートし、Propsに必要なデータを設定します。

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

このようにページコンポーネントにインポートしたCustomHeadに対してPropを渡すだけで、カスタマイズしたhead要素をページに追加することができます。

普通のコンポーネントの作成と考え方は変わらず単純なので、Next.jsでウェブサイトを作成するときには、このようなコンポーネントを作成しておくと良いでしょう。

## 注意点

\_document.{jsx, tsx}で`next/document`を使用してHeadコンポーネントにtitleタグなどを指定している場合は、CustomHeadのtitleタグと競合してしまいます。

表示自体に問題はありませんが、titleタグが２つ存在すると意図しない設定になってしまう可能性があるので、場合に応じてどちらかのタグを削除するようにしてください。

上記についてはこちらのissueが参考になると思います。

- <a href="https://github.com/vercel/next.js/issues/9794" target="_blank" rel="noreferrer">Duplicate meta tags when using Head both in custom document and page</a>

## 参考にしたサイト

- <a href="https://nextjs.org/docs/api-reference/next/head" target="_blank" rel="noreferrer">next/head | Next.js</a>
