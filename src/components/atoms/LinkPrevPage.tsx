import React from 'react'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

type Props = {
  href: string
  as: string
}

const LinkPrevPage: React.FC<Props> = ({ href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className="mr-auto blog-nav-link transition-navigation">
        <FiChevronLeft />
        <span className="ml-2">Previous</span>
      </a>
    </Link>
  )
}

export default LinkPrevPage
