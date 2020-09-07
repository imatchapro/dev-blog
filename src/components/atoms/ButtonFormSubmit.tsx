import React from 'react'
import { FiSend } from 'react-icons/fi'

const ButtonFormSubmit: React.FC = () => {
  return (
    <button className="icon-button transition-navigation" type="submit">
      <FiSend />
      <span className="ml-2">送信</span>
    </button>
  )
}

export default ButtonFormSubmit
