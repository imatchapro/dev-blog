import React from 'react'
import { NextPage } from 'next'
import HeadingPage from '../components/atoms/HeadingPage'

const Works: NextPage = () => {
  return (
    <section>
      <HeadingPage>Works</HeadingPage>
      <div className="mt-12">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
          <li className="bg-gray-300">
            <h2></h2>
            <p></p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Works
