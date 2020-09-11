import fs from 'fs';
import prettier from 'prettier';
import globby from 'globby';

(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc.js');
  const COUNT_PER_PAGE = 10;
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/**/[*.tsx',
  ]);
  const posts = await globby(['src/posts/*.md']);
  const postPageLength = Math.ceil(posts.length / COUNT_PER_PAGE);
  const postsPages = () =>
    postPageLength > 0
      ? new Array(postPageLength)
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
            .replace('.tsx', '');
          const route = path.includes('/index')
            ? path.replace('/index', '')
            : path;

          return `
            <url>
              <loc>https://takayu.dev${route}</loc>
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