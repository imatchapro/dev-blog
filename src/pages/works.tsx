import React from 'react'
import { NextPage } from 'next'
import PageContents from '../components/molecules/PageContents'
import HeadingPage from '../components/atoms/HeadingPage'

const Works: NextPage = () => {
  return (
    <section>
      <HeadingPage>Works</HeadingPage>
      <PageContents>
        <p className=" text-xl font-medium">Coming soon ...</p>
      </PageContents>
    </section>
  )
}

export default Works
