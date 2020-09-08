import React from 'react'

const HeadingPage: React.FC = ({ children }) => {
  return (
    <h1 className="text-gray-800 text-4xl font-bold leading-none sm:text-5xl">
      {children}
    </h1>
  )
}

export default HeadingPage
