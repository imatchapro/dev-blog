import React from 'react';
import { FiBell } from 'react-icons/fi';

const TextAlert: React.FC = ({ children }) => {
  return (
    <p className="flex items-center justify-center text-red-700 py-2 px-3 bg-red-300 rounded">
      <FiBell className="text-base flex-shrink-0" />
      <span className="ml-3 text-sm sm:ml-2">{children}</span>
    </p>
  );
};

export default TextAlert;
