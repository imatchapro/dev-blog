import React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  as: string
}

const LinkPrevPage: React.FC<Props> = ({ href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className="mr-auto text-gray-600 text-sm font-semibold transition-navigation hover:text-gray-800">
        Prev Page
      </a>
    </Link>
  )
}

export default LinkPrevPage
