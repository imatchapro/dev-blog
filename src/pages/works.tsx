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
        description="実績を一覧で確認することができるページです。個人で制作したアプリケーション、ライブラリ、関わったプロダクトなどをまとめています。"
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
