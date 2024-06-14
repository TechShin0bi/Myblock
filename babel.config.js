module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@type': './src/types',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@config': './src/config',
          '@router': './src/router',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
