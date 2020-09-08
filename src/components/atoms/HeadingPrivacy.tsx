import React from 'react'

const HeadingPrivacy: React.FC = ({ children }) => {
  return (
    <h2 className="text-sm font-semibold text-gray-800 mb-2 sm:text-base font-semibold mb-4">
      {children}
    </h2>
  )
}

export default HeadingPrivacy
