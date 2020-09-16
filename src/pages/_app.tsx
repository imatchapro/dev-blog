import React from 'react';
import 'prismjs';
import ProviderMenuTrigger from '../providers/ProviderMenuTrigger';
import Layout from '../components/templates/Layout';
import '../styles/index.scss';
import '../styles/markdown.scss';
import 'prism-themes/themes/prism-nord.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ProviderMenuTrigger>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderMenuTrigger>
  );
}

export default MyApp;
