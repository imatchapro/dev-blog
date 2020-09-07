import React from 'react'

const FormItem: React.FC = ({ children }) => {
  return <div className="flex items-start mt-6 first:mt-0">{children}</div>
}

export default FormItem
