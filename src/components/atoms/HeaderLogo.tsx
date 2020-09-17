import React from 'react';
import Link from 'next/link';

type Props = {
  children: string;
};

const HeaderLogo: React.FC<Props> = ({ children }) => {
  return (
    <Link href="/">
      <a className="header-logo">{children}</a>
    </Link>
  );
};

export default HeaderLogo;
