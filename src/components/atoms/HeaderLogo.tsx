import React from 'react'
import Link from 'next/link'

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/">
      <a className="text-gray-800 text-xl font-bold">Dev Blog</a>
    </Link>
  )
}

export default HeaderLogo
