import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import 'prismjs';
import ProviderMobileMenu from '../providers/ProviderMobileMenu';
import Layout from '../components/templates/Layout';
import '../styles/index.scss';
import '../styles/markdown.scss';
import 'prism-themes/themes/prism-nord.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <ProviderMobileMenu>
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  </ProviderMobileMenu>
);

export default MyApp;
