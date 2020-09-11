import React from 'react';
import { FiBell } from 'react-icons/fi';

const TextAlert: React.FC = ({ children }) => {
  return (
    <p className="flex items-center justify-center text-red-600 py-2 px-3 bg-red-200 rounded">
      <FiBell className="text-sm flex-shrink-0" />
      <span className="ml-2 text-xs sm:ml-1">{children}</span>
    </p>
  );
};

export default TextAlert;
