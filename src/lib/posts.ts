import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { PostFrontMatterData } from '../types';

const COUNT_PER_PAGE = 10;

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getSortedPostsData(): { id: string }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as PostFrontMatterData),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.published < b.published) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getSplitPostsData(page: number): { id: string }[] {
  const sortedPostsData = getSortedPostsData();
  const length = getSplitPostsDataLength();
  const splitPostsData = new Array(length).fill(undefined).map((_, i) => {
    return sortedPostsData.slice(i * COUNT_PER_PAGE, (i + 1) * COUNT_PER_PAGE);
  });

  splitPostsData.unshift([]);

  return splitPostsData[page];
}

export function getSplitPostsDataLength(): number {
  const postDataNum = getSortedPostsData().length;

  return Math.ceil(postDataNum / COUNT_PER_PAGE);
}

export function getAllPostsPages(): { params: { page: string } }[] {
  return new Array(getSplitPostsDataLength())
    .fill(undefined)
    .map((_, i) => ({
      params: {
        page: `${i + 1}`,
      },
    }))
    .filter((_, i) => i !== 0);
}

export function getAllPostsIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(
  id: string | string[]
): Promise<{ id: string | string[]; contentHtml: string }> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as PostFrontMatterData),
  };
}
