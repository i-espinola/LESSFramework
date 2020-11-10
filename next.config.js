const withSourceMaps = require('@zeit/next-source-maps');

module.exports = {};

// module.exports = withSourceMaps({
module.exports = {
  reactStrictMode: true,
  ignoreBuildErrors: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  devIndicators: {
    autoPrerender: true,
  },
  env: {},
  i18n: {
    locales: ['pt'],
    defaultLocale: 'pt-BR',
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/doc',
      permanent: false,
    },
  ],
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    });
    return config;
  },
};
// });
