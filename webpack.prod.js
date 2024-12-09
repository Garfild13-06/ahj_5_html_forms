const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production', // Режим продакшн
  optimization: {
    minimize: true, // Минимизируем код
    minimizer: [
      new CssMinimizerPlugin(), // Минимизируем CSS
      // new TerserPlugin(), // Минимизируем JS
    ],
  },
});
