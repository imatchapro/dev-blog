import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const TextFormError: React.FC = ({ children }) => {
  return (
    <p className="flex items-center mt-2 text-xs text-red-400 font-medium sm:text-sm sm:mt-3">
      <FiAlertCircle />
      <span className="ml-1">{children}</span>
    </p>
  );
};

export default TextFormError;
