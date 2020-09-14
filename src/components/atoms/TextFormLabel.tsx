import React from 'react';

type Props = {
  htmlFor: string;
};

const TextFormLabel: React.FC<Props> = ({ htmlFor, children }) => {
  return (
    <label
      className="block mb-2 leading-tight text-base sm:text-xl sm:mb-0 sm:w-1/5 sm:py-2"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default TextFormLabel;
