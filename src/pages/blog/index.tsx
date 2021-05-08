import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useAbsoluteUrl from '../../hooks/useAbsoluteUrl';
import PageContents from '../../components/molecules/PageContents';
import BlogPostList from '../../components/molecules/BlogPostList';
import BlogPagination from '../../components/molecules/BlogPagination';
import HeadingPage from '../../components/atoms/HeadingPage';
import LinkNextPage from '../../components/atoms/LinkNextPage';
import { getPostsPagesData } from '../../lib/api';
import { PostsPagesData } from '../../types';

type Props = PostsPagesData;

const Blog: NextPage<Props> = ({ posts, next }) => {
  const absolute_url = useAbsoluteUrl();

  return (
    <>
      <NextSeo
        title="Blog"
        description="開発ブログの一覧ページです。フロントエンドの最新のトレンドや、考察、技術の紹介などを中心に記事を書いています。"
        canonical={absolute_url}
        openGraph={{
          url: absolute_url,
        }}
      />
      <section>
        <HeadingPage>Blog</HeadingPage>
        <PageContents>
          <BlogPostList postsData={posts} />
        </PageContents>
        {next && (
          <BlogPagination>
            <LinkNextPage href={'/blog/page/[number]'} as={'/blog/page/2'} />
          </BlogPagination>
        )}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPostsPagesData(1);

  return {
    props: {
      ...data,
    },
  };
};

export default Blog;
