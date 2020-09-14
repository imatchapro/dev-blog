import React from 'react';
import { NextPage } from 'next';
import PageHead from '../components/templates/PageHead';
import ThePrivacyPolicy from '../components/organisms/ThePrivacyPolicy';
import PageContents from '../components/molecules/PageContents';
import HeadingPage from '../components/atoms/HeadingPage';

const Privacy: NextPage = () => {
  return (
    <>
      <PageHead
        title="Privacy Policy"
        description="このサイトのプライバシーポリシーを記載しているページです。"
        type="website"
        image=""
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
