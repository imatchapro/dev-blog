import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FiArrowUp } from 'react-icons/fi'
import PageHead from '../components/templates/PageHead'
import PageContents from '../components/molecules/PageContents'
import HeadingPage from '../components/atoms/HeadingPage'

const Thanks: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <PageHead
        title="Thank you!!"
        description="「Takahashi Yuta」のWEB開発ブログ兼ポートフォリオサイトのお問い合わせ完了ページ"
        type="website"
        image=""
      />
      <section className="text-center">
        <HeadingPage>Thank you!!</HeadingPage>
        <PageContents>
          <p className=" text-xs whitespace-no-wrap leading-loose sm:text-sm">
            お問い合わせいただきありがとうございます。
            <br />
            お問い合わせの内容を確認次第、
            <wbr />
            {name}様宛にご返信をいたします。
            <br />
            お急ぎの場合は
            <a
              className="text-blue-600 font-medium hover:text-blue-400 transition-navigation"
              href="https://twitter.com/takayu_dev"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            のDMも開放しているので、
            <wbr />
            お気軽にメッセージを送ってください。
          </p>
        </PageContents>
        <div className="mt-12">
          <Link href="/">
            <a className="icon-button transition-navigation">
              <FiArrowUp />
              <span className="ml-2">トップページ</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Thanks
