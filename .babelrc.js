module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'typescript', 'css', 'html', 'jsx', 'tsx', 'shell-session'],
        css: true,
      },
    ],
  ],
};
