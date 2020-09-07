import React from 'react'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

type Props = {
  href: string
}

const LinkBackPage: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <a className="mr-auto blog-nav-link transition-navigation">
        <FiArrowLeft />
        <span className="ml-2">Back</span>
      </a>
    </Link>
  )
}

export default LinkBackPage
