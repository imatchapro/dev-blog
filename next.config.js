/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path');

const withTM = require('next-transpile-modules')([]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src');

    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }

    return config;
  },
  env: {
    static_form_access_key: process.env.STATIC_FORM_ACCESS_KEY,
  },
});
