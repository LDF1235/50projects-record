module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'macros',
        {
          'fontawesome-svg-core': {
            license: 'free',
          },
        },
      ],
    ],
  };
};
