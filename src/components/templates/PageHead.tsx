import React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  description: string
  image: string
  url: string
}

const PageHead: React.FC<Props> = ({
  title = 'DEV BLOG',
  description,
  image,
  url,
  children,
}): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="blog" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tcr_jp" />
    <meta name="twitter:url" content={image} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={url} />
    <link rel="apple-touch-icon" href="" />
    {children}
  </Head>
)

export default PageHead
