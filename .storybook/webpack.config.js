const path = require('path');
const cssnano = require('cssnano');
// Webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DiscardOverriddenCssPropsPlugin = require('../webpack-scripts/discard-overridden-css-props');

module.exports = function ({ config, mode }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true,
        },
      },
      'css-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'javascript' },
      },
    ],
    enforce: 'pre',
  });

  config.devtool = (mode === 'DEVELOPMENT') ? 'inline-source-map' : false;
  config.performance = {
    hints: false
  };

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  );

  config.plugins.push(
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAllButFirst: true,
            },
            cssDeclarationSorter: {
              order: 'alphabetically',
            },
          },
        ],
      },
    }),
  );

  config.plugins.push(
    new DiscardOverriddenCssPropsPlugin(),
  );

  const srcPath = (mode === 'DEVELOPMENT') ? '../src/' : `../npm/`;

  config.resolve = {
    ...config.resolve,
    modules: [
      ...config.resolve.modules,
    ],
    alias: {
      ...config.resolve.alias,
      src: path.resolve(__dirname, srcPath),
    }
  };

  /**
   * Enable load external packages or dependencies outside of node_modules
   * The native support should be fixed in the future releases of Storybook:
   * 
   * https://github.com/storybookjs/storybook/issues/5949
   * 
   * Solution based on: 
   * https://github.com/storybookjs/storybook/issues/3346
   */
  // Use real file paths for symlinked dependencies do avoid including them multiple times
  config.resolve.symlinks = true;

  // HACK: extend existing JS rule to ensure all dependencies are correctly ignored
  // https://github.com/storybooks/storybook/issues/3346#issuecomment-459439438
  const excludePaths = [/node_modules/, /npm/];
  const jsRule = config.module.rules.find((rule) => rule.test.test('.jsx'))
  jsRule.exclude = excludePaths;

  // HACK: Instruct Babel to check module type before injecting Core JS polyfills
  // https://github.com/i-like-robots/broken-webpack-bundle-test-case
  const babelConfig = jsRule.use.find(({ loader }) => loader === 'babel-loader');
  babelConfig.options.sourceType = 'unambiguous';

  // HACK: Ensure we only bundle one instance of React
  config.resolve.alias.react = require.resolve('react');

  // Return modified config
  return config;
};
