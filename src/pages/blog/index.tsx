import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getAllPostsPages, getSplitPostsData } from '../../lib/posts'
import PageContents from '../../components/molecules/PageContents'
import BlogPostList from '../../components/molecules/BlogPostList'
import BlogPagination from '../../components/molecules/BlogPagination'
import HeadingPage from '../../components/atoms/HeadingPage'
import LinkNextPage from '../../components/atoms/LinkNextPage'
import { PostsData } from '../../types'
import PageHead from "../../components/templates/PageHead";

type Props = {
  postsData: PostsData[]
  nextDataExists: boolean
}

const Blog: NextPage<Props> = ({ postsData, nextDataExists }) => {
  return (
    <>
      <PageHead
        title="Blog"
        description="Takahashi YutaのWEB開発ブログ兼ポートフォリオサイトのブログ一覧ページ"
        type="website"
        image=""
      />
      <section>
        <HeadingPage>Blog</HeadingPage>
        <PageContents>
          <BlogPostList postsData={postsData} />
        </PageContents>
        {nextDataExists && (
          <BlogPagination>
            <LinkNextPage href={'/blog/page/[page]'} as={'/blog/page/2'} />
          </BlogPagination>
        )}
      </section>
    </>
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
