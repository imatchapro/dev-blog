import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useAbsoluteUrl from '../hooks/useAbsoluteUrl';
import ThePrivacyPolicy from '../components/organisms/ThePrivacyPolicy';
import PageContents from '../components/molecules/PageContents';
import HeadingPage from '../components/atoms/HeadingPage';

const Privacy: NextPage = () => {
  const absolute_url = useAbsoluteUrl();

  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description="このサイトのプライバシーポリシーを記載しているページです。"
        canonical={absolute_url}
        openGraph={{
          url: absolute_url,
        }}
      />
      <section>
        <HeadingPage>Privacy Policy</HeadingPage>
        <PageContents>
          <ThePrivacyPolicy />
        </PageContents>
      </section>
    </>
  );
};

export default Privacy;
