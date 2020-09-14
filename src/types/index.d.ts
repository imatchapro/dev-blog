export type PostContentData = {
  id: string;
  published: string;
  title: string;
  tldr: string;
  contentHtml: string;
};

export type PostsData = Omit<PostContentData, 'contentHtml'>;

export type PostFrontMatterData = Pick<PostData, 'title' | 'published' | 'tldr'>;
