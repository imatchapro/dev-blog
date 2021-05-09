import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageContents from '../../../components/molecules/PageContents';
import BlogPostList from '../../../components/molecules/BlogPostList';
import BlogPagination from '../../../components/molecules/BlogPagination';
import HeadingPage from '../../../components/atoms/HeadingPage';
import LinkPrevPage from '../../../components/atoms/LinkPrevPage';
import LinkNextPage from '../../../components/atoms/LinkNextPage';
import { getPostsPagesData } from '../../../lib/api';
import { PostsPagesData } from '../../../types';

type Props = PostsPagesData;

const BlogPage: NextPage<Props> = ({ posts, prev, next }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="開発ブログの一覧ページです。フロントエンドの最新のトレンドや、考察、技術の紹介などを中心に記事を書いています。"
      />
      <section>
        <HeadingPage>Blog</HeadingPage>
        <PageContents>
          <BlogPostList postsData={posts} />
        </PageContents>
        <BlogPagination>
          {prev ? (
            <LinkPrevPage href={'/blog/page/[number]'} as={`/blog/page/${prev}`} />
          ) : (
            <LinkPrevPage href={'/blog/'} as={'/blog/'} />
          )}
          {next && <LinkNextPage href={'/blog/page/[number]'} as={`/blog/page/${next}`} />}
        </BlogPagination>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { paths } = await getPostsPagesData();

  return {
    paths: paths
      ? paths.map((page) => ({
          params: {
            number: String(page),
          },
        }))
      : [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = Number(params.number);
  const data = await getPostsPagesData(page);

  return {
    props: {
      ...data,
    },
  };
};

export default BlogPage;
