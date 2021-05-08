import type { NextSeoProps } from 'next-seo';
import { site_name } from './src/lib/constants';

export default {
  titleTemplate: `%s | ${site_name}`,
  defaultTitle: site_name,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: site_name,
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
