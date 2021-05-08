import React from 'react';
import { NextPage } from 'next';
import PageContents from '../components/molecules/PageContents';
import HeadingPage from '../components/atoms/HeadingPage';
import { NextSeo } from 'next-seo';
import useAbsoluteUrl from '../hooks/useAbsoluteUrl';

const Works: NextPage = () => {
  const absolute_url = useAbsoluteUrl();

  return (
    <>
      <NextSeo
        title="Works"
        description="実績を一覧で確認することができるページです。個人で制作したアプリケーション、ライブラリ、関わったプロダクトなどをまとめています。"
        canonical={absolute_url}
        openGraph={{
          url: absolute_url,
        }}
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
