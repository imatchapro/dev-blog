import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPostsPages, getSplitPostsData, getSplitPostsDataLength } from '../../../lib/posts';
import PageHead from '../../../components/templates/PageHead';
import PageContents from '../../../components/molecules/PageContents';
import BlogPostList from '../../../components/molecules/BlogPostList';
import BlogPagination from '../../../components/molecules/BlogPagination';
import HeadingPage from '../../../components/atoms/HeadingPage';
import LinkPrevPage from '../../../components/atoms/LinkPrevPage';
import LinkNextPage from '../../../components/atoms/LinkNextPage';
import { PostsData } from '../../../types';

type Props = {
  postsData: PostsData[];
  prevPageLink: { href: string; as: string };
  nextPageLink: { href: string; as: string } | null;
};

const BlogPage: NextPage<Props> = ({ postsData, prevPageLink, nextPageLink }) => {
  return (
    <>
      <PageHead
        title="Blog"
        description="開発ブログの一覧ページです。フロントエンドの最新のトレンドや、考察、技術の紹介などを中心に記事を書いています。"
        type="website"
        image=""
      />
      <section>
        <HeadingPage>Blog</HeadingPage>
        <PageContents>
          <BlogPostList postsData={postsData} />
        </PageContents>
        <BlogPagination>
          <LinkPrevPage href={prevPageLink.href} as={prevPageLink.as} />
          {nextPageLink && <LinkNextPage href={nextPageLink.href} as={nextPageLink.as} />}
        </BlogPagination>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsPages();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum = +params.page;
  const postsData = await getSplitPostsData(pageNum);
  const pageLength = await getSplitPostsDataLength();
  const prevPageLink =
    params.page === '2'
      ? { href: '/blog', as: '/blog' }
      : { href: '/blog/page/[page]', as: `/blog/page/${pageNum - 1}` };
  const nextPageLink =
    pageLength === pageNum
      ? null
      : {
          href: '/blog/page/[page]',
          as: `/blog/page/${pageNum + 1}`,
        };

  return {
    props: {
      postsData,
      prevPageLink,
      nextPageLink,
    },
  };
};

export default BlogPage;
