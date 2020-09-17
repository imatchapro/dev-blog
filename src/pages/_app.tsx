import React from 'react';
import 'prismjs';
import ProviderMobileMenu from '../providers/ProviderMobileMenu';
import Layout from '../components/templates/Layout';
import '../styles/index.scss';
import '../styles/markdown.scss';
import 'prism-themes/themes/prism-nord.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ProviderMobileMenu>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderMobileMenu>
  );
}

export default MyApp;
