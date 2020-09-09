import React from 'react'
import { NextPage } from 'next'
import PageHead from '../components/templates/PageHead'
import PageContents from '../components/molecules/PageContents'
import HeadingPage from '../components/atoms/HeadingPage'

const Works: NextPage = () => {
  return (
    <>
      <PageHead
        title="Works"
        description="Takahashi YutaのWEB開発ブログ兼ポートフォリオサイトの実績一覧ページ"
        type="website"
        image=""
      />
      <section>
        <HeadingPage>Works</HeadingPage>
        <PageContents>
          <p className=" text-xl font-medium">Coming soon ...</p>
        </PageContents>
      </section>
    </>
  )
}

export default Works
