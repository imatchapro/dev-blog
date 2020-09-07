import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useRouter } from 'next/router'

const LinkBackPage: React.FC = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mr-auto blog-nav-link transition-navigation"
    >
      <FiArrowLeft />
      <span className="ml-2">Back</span>
    </button>
  )
}

export default LinkBackPage
