import React, { useEffect, useState } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  type: string
  image: string
}

const site_name = 'Dev Blog'
const twitter_id = '@imatchapro'

const PageHead: React.FC<Props> = ({
  title,
  description,
  type,
  image,
}): JSX.Element => {
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    setUrl(location.href)
  })

  return (
    <Head>
      <title>{site_name + ' | ' + title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={site_name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter_id} />
      <meta name="twitter:creator" content={twitter_id} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" href="" />
    </Head>
  )
}

export default PageHead
