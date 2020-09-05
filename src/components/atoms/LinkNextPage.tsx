import React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  as: string
}

const LinkNextPage: React.FC<Props> = ({ href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className="ml-auto text-gray-600 text-sm font-semibold transition-navigation hover:text-gray-800">
        Next Page
      </a>
    </Link>
  )
}

export default LinkNextPage
