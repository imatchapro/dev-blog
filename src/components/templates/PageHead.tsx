import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  type: string
  image: string
}

const site_name = 'Dev Blog'

const PageHead: React.FC<Props> = ({
  title,
  description,
  type,
  image,
  children,
}): JSX.Element => (
  <Head>
    <title>{title + ' | ' + site_name}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={location.href} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={site_name} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@imatchapro" />
    <meta name="twitter:creator" content="@imatchapro" />
    <meta name="twitter:url" content={location.href} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={location.href} />
    <link rel="apple-touch-icon" href="" />
    {children}
  </Head>
)

export default PageHead
