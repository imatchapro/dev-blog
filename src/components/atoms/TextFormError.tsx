import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

const TextFormError: React.FC = ({ children }) => {
  return (
    <p className="flex items-center mt-3 text-sm text-red-400 font-medium">
      <FiAlertCircle />
      <span className="ml-1">{children}</span>
    </p>
  )
}

export default TextFormError
