import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ThePrivacyPolicy from '../components/organisms/ThePrivacyPolicy';
import PageContents from '../components/molecules/PageContents';
import HeadingPage from '../components/atoms/HeadingPage';

const Privacy: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description="このサイトのプライバシーポリシーを記載しているページです。"
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
