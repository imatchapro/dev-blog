import React from 'react'
import Link from 'next/link'
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
          <Link href={'/blog/[id]'} as={`/blog/${id}`}>
            <a>
              <p className="text-xs text-gray-600">
                <TextFormatDate dateString={date} />
              </p>
              <h2 className="text-xl font-bold mt-1">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
              <p className="text-blue-600 text-sm font-semibold mt-4">
                Read more this post
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogPostList
