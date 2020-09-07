import React from 'react'
import HeaderNavigation from '../molecules/HeaderNavigation'
import HeaderLogo from '../atoms/HeaderLogo'

const TheHeader: React.FC = () => {
  return (
    <header className="flex-shrink-0 flex items-center h-16 px-6 bg-white border-b sm:h-20">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  )
}

export default TheHeader
