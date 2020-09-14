import React from 'react';

type Props = {
  htmlFor: string;
};

const TextFormLabel: React.FC<Props> = ({ htmlFor, children }) => {
  return (
    <label className="block  mb-1 sm:text-xl sm:mb-0 sm:w-1/5 sm:py-1" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default TextFormLabel;
