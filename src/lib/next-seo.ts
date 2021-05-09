import type { NextSeoProps } from 'next-seo';

export default {
  titleTemplate: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@takayu_dev',
    site: '@takayu_dev',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#2d3748',
    },
    {
      name: 'google-site-verification',
      content: 'ZW6JZSQ4ERfNwAweTmyq4O70XY8o1tt1-A90y1Zx61I',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      href: '/sitemap.xml',
    },
    {
      rel: 'preconnect dns-prefetch',
      href: 'https://www.google-analytics.com',
    },
  ],
} as NextSeoProps;
