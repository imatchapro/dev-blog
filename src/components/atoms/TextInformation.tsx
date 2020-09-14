import React from 'react';
import { FiInfo } from 'react-icons/fi';

const TextInformation: React.FC = ({ children }) => {
  return (
    <p className="flex items-center justify-center py-2 px-3 bg-gray-300 rounded">
      <FiInfo className="text-base flex-shrink-0" />
      <span className="ml-3 text-sm sm:ml-2">{children}</span>
    </p>
  );
};

export default TextInformation;
