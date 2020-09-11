/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const prettier = require('prettier');
const globby = require('globby');

const SITE_NAME = 'takayu.dev';
const COUNT_PER_PAGE = 10;

(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc.js');
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/**/[*.tsx',
  ]);
  const posts = await globby(['src/posts/*.md']);
  const postsPagesLength = Math.ceil(posts.length / COUNT_PER_PAGE);
  const postsPages = () =>
    postsPagesLength > 0
      ? new Array(postsPagesLength)
          .fill(undefined)
          .map((_, i) => `/blog/page/${i + 1}`)
          .filter((_, i) => i !== 0)
      : [];
  const routes = [...pages, ...posts, ...postsPages()];
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((page) => {
          const path = page
            .replace('src/', '')
            .replace('pages', '')
            .replace('posts', '/blog')
            .replace('.md', '')
            .replace('.tsx', '')
            .replace('/index', '');

          return `
            <url>
              <loc>https://${SITE_NAME}${path}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
