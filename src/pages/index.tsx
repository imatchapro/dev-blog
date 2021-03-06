import React from 'react';
import { NextPage } from 'next';
import PageHead from '../components/templates/PageHead';
import TheMainView from '../components/organisms/TheMainView';
import TheContentsNavigation from '../components/organisms/TheContentsNavigation';
import TheProfile from '../components/organisms/TheProfile';

const Home: NextPage = () => (
  <>
    <PageHead
      title="Home"
      description="takayu.devは、主にフロントエンドを中心とした開発ブログや、個人で制作したアプリケーション、ライブラリ、関わったプロダクトの一覧をまとめているサイトです。"
      type="website"
      image=""
    />
    <TheMainView />
    <TheContentsNavigation rootClassName="mt-12" />
    <TheProfile />
  </>
);

export default Home;
