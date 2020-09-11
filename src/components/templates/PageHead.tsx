import React, { useEffect, useState } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  type: string;
  image: string;
};

const SITE_NAME = "Yuta Takahashi's Website";
const TWITTER_ID = '@takayu_dev';

const PageHead: React.FC<Props> = ({
  title,
  description,
  type,
  image,
}): JSX.Element => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setUrl(location.href);
  });

  return (
    <Head>
      <title>{title + ' | ' + SITE_NAME}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#2d3748" />
      <meta name="google-site-verification" content="ZW6JZSQ4ERfNwAweTmyq4O70XY8o1tt1-A90y1Zx61I" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
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
      <link
        rel="preconnect dns-prefetch"
        href="https://www.google-analytics.com"
      />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Head>
  );
};

export default PageHead;
