import React from 'react'

type Props = {
  htmlFor: string
}

const TextFormLabel: React.FC<Props> = ({ htmlFor, children }) => {
  return (
    <label className="text-gray-600 text-xl py-1 w-1/5" htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default TextFormLabel
