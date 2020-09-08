import React from 'react'
import { NextPage } from 'next'
import PageHead from '../components/templates/PageHead'
import TheMainView from '../components/organisms/TheMainView'
import TheContentsNavigation from '../components/organisms/TheContentsNavigation'
import TheProfile from '../components/organisms/TheProfile'

const Home: NextPage = () => (
  <>
    <PageHead description={''} image={''} url={''} />
    <TheMainView />
    <TheContentsNavigation />
    <TheProfile />
  </>
)

export default Home