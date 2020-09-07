import React from 'react'
import { FiSend } from 'react-icons/fi'

const ButtonFormSubmit: React.FC = () => {
  return (
    <button
      className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-400 transition-navigation"
      type="submit"
    >
      <FiSend />
      <span className="ml-2">送信</span>
    </button>
  )
}

export default ButtonFormSubmit
