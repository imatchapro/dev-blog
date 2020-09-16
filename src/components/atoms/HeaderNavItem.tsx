import React from 'react';
import Link from 'next/link';

type Props = {
  path: string;
};

const HeaderNavItem: React.FC<Props> = ({ path, children }) => {
  return (
    <li className="ml-6 first:ml-0">
      <Link href={path}>
        <a className="font-medium transition-navigation hover:text-gray-900">{children}</a>
      </Link>
    </li>
  );
};

export default HeaderNavItem;
