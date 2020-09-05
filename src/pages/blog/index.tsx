import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPostsPages, getSplitPostsData } from '../../lib/posts'
import BlogPostList from '../../components/molecules/BlogPostList'
import BlogPagination from '../../components/molecules/BlogPagination'
import HeadingPage from '../../components/atoms/HeadingPage'
import LinkNextPage from '../../components/atoms/LinkNextPage'
import { PostsData } from '../../types'

type Props = {
  postsData: PostsData[]
  nextDataExists: boolean
}

const Blog: NextPage<Props> = ({ postsData, nextDataExists }) => {
  return (
    <section>
      <HeadingPage>Blog</HeadingPage>
      <div className="mt-12">
        <BlogPostList postsData={postsData} />
      </div>
      {nextDataExists && (
        <BlogPagination>
          <LinkNextPage href={'/blog/page/[page]'} as={'/blog/page/2'} />
        </BlogPagination>
      )}
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getSplitPostsData(1)
  const nextDataExists = getAllPostsPages().length > 0

  return {
    props: {
      postsData,
      nextDataExists,
    },
  }
}

export default Blog
