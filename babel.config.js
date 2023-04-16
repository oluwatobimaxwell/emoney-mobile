module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@images': './assets/images',
            '@fonts': './assets/fonts',
            '@icons': './assets/icons'
          },
        },
      ],
    ],
  };
};
