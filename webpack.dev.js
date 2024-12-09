const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development', // Режим разработки
  devtool: 'inline-source-map', // Source maps для отладки
  devServer: {
    static: './dist', // Папка для раздачи файлов
    historyApiFallback: true, // Поддержка SPA
    open: true, // Автоматически открывать браузер
    compress: true, // Сжатие
    port: 8080, // Порт сервера
  },
});
