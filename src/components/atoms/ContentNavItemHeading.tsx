import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

const ContentNavItemHeading: React.FC<Props> = ({ href, text, icon }) => {
  return (
    <h2>
      <Link href={href}>
        <a className="flex items-center text-2xl font-semibold text-gray-900 leading-none">
          {icon}
          <span className="ml-3">{text}</span>
        </a>
      </Link>
    </h2>
  );
};

export default ContentNavItemHeading;
