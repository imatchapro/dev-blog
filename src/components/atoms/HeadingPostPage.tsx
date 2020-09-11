import React from 'react';

const HeadingPostPage: React.FC = ({ children }) => {
  return (
    <h1 className="text-gray-800 text-2xl font-bold sm:text-4xl">{children}</h1>
  );
};

export default HeadingPostPage;
