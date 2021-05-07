import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { PostData, PostMetaData, PostsPagesData } from '../types';

export async function getPostsData(): Promise<PostData[]> {
  const directory = join(process.cwd(), 'src/posts');
  const files = readdirSync(directory);

  const posts = files.map((file) => {
    const realSlug = file.replace(/\.md$/, '');
    const filePath = join(directory, file);
    const fileContents = readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data as PostMetaData,
      content: content,
    };
  });

  return sortPostsData(posts, 'desc');
}

export async function getPostsPagesData(page = 1): Promise<PostsPagesData> {
  const data = await getPostsData();
  const count = 10;
  const total = Math.ceil(data.length / count);
  const pages = [...Array(total)].map((_, i) => i + 1);
  const posts = pages.map((page, i) => {
    return data.slice(i * count, page * count);
  });

  return {
    pages: pages,
    prev: 2 < page ? page - 1 : null,
    next: total > page ? page + 1 : null,
    posts: posts[page - 1],
  };
}

export async function sortPostsData(data: PostData[], type: 'desc' | 'asc'): Promise<PostData[]> {
  return data.sort((a, b) => {
    const publishedA = a.meta.published;
    const publishedB = b.meta.published;

    switch (type) {
      case 'asc':
        return publishedA > publishedB ? 1 : -1;
      case 'desc':
        return publishedA < publishedB ? 1 : -1;
    }
  });
}
