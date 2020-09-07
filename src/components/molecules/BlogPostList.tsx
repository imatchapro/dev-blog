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
      {postsData.map(({ date, description, id, title }) => (
        <li className="mt-12 first:mt-0" key={id}>
          <p className="text-xs text-gray-600">
            <TextFormatDate dateString={date} />
          </p>
          <h2 className="text-xl font-bold mt-1">
            <Link href={'/blog/[id]'} as={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <p className="mt-4">
            <Link href={'/blog/[id]'} as={`/blog/${id}`}>
              <a className="text-blue-600 text-xs font-semibold inline-flex items-center">
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
