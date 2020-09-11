import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

type Props = {
  href: string;
  as: string;
};

const LinkNextPage: React.FC<Props> = ({ href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className="ml-auto blog-nav-link transition-navigation">
        <span className="mr-2">Next</span>
        <FiChevronRight />
      </a>
    </Link>
  );
};

export default LinkNextPage;
