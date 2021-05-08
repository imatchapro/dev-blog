import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useAbsoluteUrl from '../../hooks/useAbsoluteUrl';
import Prism from 'prismjs';
import { getPostsData } from '../../lib/api';
import BlogPagination from '../../components/molecules/BlogPagination';
import HeadingPostPage from '../../components/atoms/HeadingPostPage';
import LinkBackPage from '../../components/atoms/LinkBackPage';
import TextFormatDate from '../../components/atoms/TextFormatDate';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostData } from '../../types';

type Props = PostData;

const BlogPost: NextPage<Props> = ({ content, meta }) => {
  const absolute_url = useAbsoluteUrl();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.tldr}
        canonical={absolute_url}
        openGraph={{
          url: absolute_url,
        }}
      />
      <article>
        <section>
          <p className="mb-3 text-base font-normal sm:text-lg">
            <TextFormatDate dateString={meta.published} />
          </p>
          <HeadingPostPage>{meta.title}</HeadingPostPage>
        </section>
        <section className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
        <BlogPagination>
          <LinkBackPage />
        </BlogPagination>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPostsData();
  const paths = data.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostsData();
  const post = data.find((post) => post.slug === params.slug);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      ...post,
      content,
    },
  };
};

export default BlogPost;
