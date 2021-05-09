import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';
import 'prismjs';
import ProviderMobileMenu from '../providers/ProviderMobileMenu';
import Layout from '../components/templates/Layout';
import '../styles/index.scss';
import '../styles/markdown.scss';
import 'prism-themes/themes/prism-nord.css';
import useAbsoluteUrl from '../hooks/useAbsoluteUrl';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const url = useAbsoluteUrl();

  return (
    <ProviderMobileMenu>
      <Layout>
        <DefaultSeo {...SEO} canonical={url} openGraph={{ url }} />
        <Component {...pageProps} />
      </Layout>
    </ProviderMobileMenu>
  );
};

export default MyApp;
