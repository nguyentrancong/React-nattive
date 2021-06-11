module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './resources/images',
            rootPathPrefix: '@images/',
          },
          {
            rootPathSuffix: './src/utils',
            rootPathPrefix: '@utils/',
          },
          {
            rootPathSuffix: './src/managers',
            rootPathPrefix: '@managers/',
          },
          {
            rootPathSuffix: './src/common',
            rootPathPrefix: '@common/',
          },
        ],
      },
    ],
  ],
};
