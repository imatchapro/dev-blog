import React from 'react'
import Link from 'next/link'
import { FiLink } from 'react-icons/fi'
import TextFormatDate from '../atoms/TextFormatDate'
import { PostsData } from '../../types'

type Props = {
  postsData: PostsData[]
}

const BlogPostList: React.FC<Props> = ({ postsData }) => {
  return (
    <ul>
      {postsData.map(({ published, tldr, id, title }) => (
        <li className="mt-12 first:mt-0" key={id}>
          <p className="text-xs">
            <TextFormatDate dateString={published} />
          </p>
          <h2 className="text-gray-800 text-xl font-bold mt-1">
            <Link href={'/blog/[id]'} as={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="text-sm  mt-3">{tldr}</p>
          <p className="mt-4">
            <Link href={'/blog/[id]'} as={`/blog/${id}`}>
              <a className="text-blue-600 text-xs font-semibold inline-flex items-center transition-navigation hover:text-blue-400 sm:text-sm">
                <FiLink />
                <span className="ml-1">この記事を見る</span>
              </a>
            </Link>
          </p>
        </li>
      ))}
    </ul>
  )
}

export default BlogPostList
