import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';
import 'prismjs';
import ProviderMobileMenu from '../providers/ProviderMobileMenu';
import '../styles/index.scss';
import '../styles/markdown.scss';
import 'prism-themes/themes/prism-nord.css';
import useAbsoluteUrl from '../hooks/useAbsoluteUrl';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const url = useAbsoluteUrl();

  return (
    <ChakraProvider>
      <ProviderMobileMenu>
        <DefaultSeo {...SEO} canonical={url} openGraph={{ url }} />
        <Component {...pageProps} />
      </ProviderMobileMenu>
    </ChakraProvider>
  );
};

export default MyApp;
