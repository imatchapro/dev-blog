import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Prism from 'prismjs'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import BlogPagination from '../../components/molecules/BlogPagination'
import HeadingPage from '../../components/atoms/HeadingPage'
import { PostContentData } from '../../types'

type Props = {
  postData: PostContentData
}

const BlogPost: NextPage<Props> = ({ postData }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article>
      <HeadingPage>{postData.title}</HeadingPage>
      <p className="mt-10 text-gray-600">{postData.description}</p>
      <section
        className="markdown"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <BlogPagination>
        <Link href={'/blog'}>
          <a className="mr-auto text-gray-600 text-sm font-semibold transition-navigation hover:text-gray-800">
            Back Post List
          </a>
        </Link>
      </BlogPagination>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

export default BlogPost
