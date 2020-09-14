import React from 'react';
import Link from 'next/link';

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/">
      <a className="text-lg font-bold text-gray-900 sm:text-2xl">TKY.DEV</a>
    </Link>
  );
};

export default HeaderLogo;
