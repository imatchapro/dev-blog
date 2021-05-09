export type PostData = {
  slug: string;
  meta: PostMetaData;
  content: string;
};

export type PostMetaData = {
  title: string;
  published: string;
  tldr: string;
};

export type PostsPagesData = {
  paths: number[] | null;
  prev: number | null;
  next: number | null;
  posts: PostData[];
};
