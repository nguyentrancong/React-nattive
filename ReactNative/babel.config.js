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
            rootPathSuffix: './resources/icons',
            rootPathPrefix: '@icons/',
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
            rootPathSuffix: './src/common/views',
            rootPathPrefix: '@views/',
          },
          {
            rootPathSuffix: './src/common/models',
            rootPathPrefix: '@models/',
          },
        ],
      },
    ],
  ],
};
