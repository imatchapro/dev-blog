import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Prism from 'prismjs';
import { getAllPostsIds, getPostData } from '../../lib/posts';
import PageHead from '../../components/templates/PageHead';
import BlogPagination from '../../components/molecules/BlogPagination';
import HeadingPostPage from '../../components/atoms/HeadingPostPage';
import LinkBackPage from '../../components/atoms/LinkBackPage';
import TextFormatDate from '../../components/atoms/TextFormatDate';
import { PostContentData } from '../../types';

type Props = {
  postData: PostContentData;
};

const BlogPost: NextPage<Props> = ({ postData: { contentHtml, published, tldr, title } }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <PageHead title={title} description={tldr} type="article" image="" />
      <article>
        <section>
          <p className="mb-3 text-base font-normal sm:text-lg">
            <TextFormatDate dateString={published} />
          </p>
          <HeadingPostPage>{title}</HeadingPostPage>
        </section>
        <section className="markdown" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <BlogPagination>
          <LinkBackPage />
        </BlogPagination>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export default BlogPost;
