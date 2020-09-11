import React from 'react';
import { NextPage } from 'next';
import PageHead from '../components/templates/PageHead';
import PageContents from '../components/molecules/PageContents';
import HeadingPage from '../components/atoms/HeadingPage';

const Works: NextPage = () => {
  return (
    <>
      <PageHead
        title="Works"
        description="個人で制作したアプリケーションやライブラリ、関わったプロダクトなどの実績を一覧で確認することができるページです。"
        type="website"
        image=""
      />
      <section>
        <HeadingPage>Works</HeadingPage>
        <PageContents>
          <p className="text-xl">Coming soon ...</p>
        </PageContents>
      </section>
    </>
  );
};

export default Works;
