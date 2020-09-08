import React from 'react'
import { FiGithub, FiTwitter, FiMapPin, FiMessageCircle } from 'react-icons/fi'
import ProfileListItem from '../atoms/ProfileListItem'

const TheProfile: React.FC = () => {
  return (
    <section className="mt-12 pt-12 border-t flex sm:mt-12 sm:pt-12">
      <figure>
        <div className="w-16 h-16 rounded bg-gray-300 sm:w-32 sm:h-32" />
      </figure>
      <div className="ml-6 sm:ml-12">
        <h1 className="text-2xl text-gray-800 font-semibold leading-none sm:text-3xl">
          Yuta Takahashi
        </h1>
        <nav className="mt-6 sm:mt-6">
          <ul>
            <ProfileListItem
              icon={FiMessageCircle}
              text="I'm unemployed. Give me a job. Seriously."
            />
            <ProfileListItem
              icon={FiMapPin}
              text="Fukuoka, Japan"
              href="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82/@33.6496589,129.9837839,10z/data=!3m1!4b1!4m5!3m4!1s0x3541eda1e9848429:0xf60a729936398783!8m2!3d33.5901838!4d130.4016888"
            />
            <ProfileListItem
              icon={FiGithub}
              text="@imatchapro"
              href="https://github.com/imatchapro"
            />
            <ProfileListItem
              icon={FiTwitter}
              text="@imatchapro"
              href="https://twitter.com/imatchapro"
            />
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default TheProfile
