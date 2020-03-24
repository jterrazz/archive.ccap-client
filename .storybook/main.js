module.exports = {
  stories: ['../**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.module.rules.push({
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
