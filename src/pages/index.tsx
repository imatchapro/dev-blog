import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import TheMainView from '../components/organisms/TheMainView';
import TheContentsNavigation from '../components/organisms/TheContentsNavigation';
import TheProfile from '../components/organisms/TheProfile';
import useAbsoluteUrl from '../hooks/useAbsoluteUrl';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        description="takayu.devは、主にフロントエンドを中心とした開発ブログや、個人で制作したアプリケーション、ライブラリ、関わったプロダクトの一覧をまとめているサイトです。"
      />
      <TheMainView />
      <TheContentsNavigation rootClassName="mt-12" />
      <TheProfile />
    </>
  );
};

export default Home;
