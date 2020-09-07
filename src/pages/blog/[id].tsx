import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Prism from 'prismjs'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import BlogPagination from '../../components/molecules/BlogPagination'
import HeadingPostPage from '../../components/atoms/HeadingPostPage'
import LinkBackPage from '../../components/atoms/LinkBackPage'
import TextFormatDate from '../../components/atoms/TextFormatDate'
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
      <section>
        <p className="text-gray-600 mb-3">
          <TextFormatDate dateString={postData.date} />
        </p>
        <HeadingPostPage>{postData.title}</HeadingPostPage>
        <p className="text-gray-600 text-base mt-6 sm:text-lg">
          {postData.description}
        </p>
      </section>
      <section
        className="markdown"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <BlogPagination>
        <LinkBackPage />
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
