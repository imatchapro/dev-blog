import React from 'react'
import Link from 'next/link'

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/">
      <a className="text-gray-800 text-xl font-bold sm:text-2xl">TAKA.YU</a>
    </Link>
  )
}

export default HeaderLogo
