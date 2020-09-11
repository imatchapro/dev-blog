import React from 'react';

const FormItem: React.FC = ({ children }) => {
  return (
    <div className="mt-6 first:mt-0 sm:flex sm:items-start">{children}</div>
  );
};

export default FormItem;
