module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "module:metro-react-native-babel-preset"],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
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
