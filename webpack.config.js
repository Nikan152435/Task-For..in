const path = require('path');

module.exports = {
  entry: './src/index.js', // замените на ваш файл входа
  mode: 'development', // или 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    
  },

module: {
    rules: [
      {
        test: /\.js$/, // регулярное выражение для выбора JavaScript файлов
        exclude: /node_modules/, // исключение папки node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // настройка пресетов Babel
          },
        },
      },
    ],
  },
};