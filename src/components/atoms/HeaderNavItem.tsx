import React from 'react'
import Link from 'next/link'

type Props = {
  path: string
}

const HeaderNavItem: React.FC<Props> = ({ path, children }) => {
  return (
    <li className="ml-4 first:ml-0">
      <Link href={path}>
        <a className="text-gray-600 text-sm font-medium transition-navigation hover:text-gray-800">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default HeaderNavItem
