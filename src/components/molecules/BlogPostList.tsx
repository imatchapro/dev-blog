import React from 'react';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import TextFormatDate from '../atoms/TextFormatDate';
import { PostData } from '../../types';

type Props = {
  postsData: PostData[];
};

const BlogPostList: React.FC<Props> = ({ postsData }) => {
  return (
    <ul>
      {postsData.map(({ slug, meta: { title, published, tldr } }) => (
        <li className="mt-12 first:mt-0" key={slug}>
          <p className="text-sm">
            <TextFormatDate dateString={published} />
          </p>
          <h2 className="text-gray-900 text-xl font-bold mt-2">
            <Link href={'/blog/[id]'} as={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="text-sm mt-3">{tldr}</p>
          <p className="mt-3 leading-normal">
            <Link href={'/blog/[id]'} as={`/blog/${slug}`}>
              <a className="text-blue-700 text-sm font-semibold inline-flex items-center transition-navigation hover:text-blue-400">
                <FiLink />
                <span className="ml-1">この記事を見る</span>
              </a>
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
