import React from 'react';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

type Props = {
  href: string;
  text: string;
};

const ContentNavItemLink: React.FC<Props> = ({ href, text }) => {
  return (
    <p className="mt-4">
      <Link href={href}>
        <a className="text-sm inline-flex items-center text-blue-600 font-semibold transition-navigation hover:text-blue-400">
          <FiLink />
          <span className="ml-1">{text}</span>
        </a>
      </Link>
    </p>
  );
};

export default ContentNavItemLink;
