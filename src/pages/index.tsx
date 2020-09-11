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
      description="Yuta Takahashiの個人ウェブサイトです。このウェブサイトでは。開発ブログ（主にフロントエンド側）を書いたり、個人で制作したアプリケーションや関わったプロダクトの一覧をまとめたりしています。"
      type="website"
      image=""
    />
    <TheMainView />
    <TheContentsNavigation />
    <TheProfile />
  </>
);

export default Home;
