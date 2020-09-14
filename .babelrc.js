module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'typescript', 'css', 'html', 'jsx', 'tsx'],
        css: true,
      },
    ],
  ],
};
