import React from 'react';
import Link from 'next/link';

type Props = {
  children: string;
};

const HeaderLogo: React.FC<Props> = ({ children }) => {
  return (
    <Link href="/">
      <a className="text-xl font-bold text-gray-900 sm:text-2xl">{children}</a>
    </Link>
  );
};

export default HeaderLogo;
