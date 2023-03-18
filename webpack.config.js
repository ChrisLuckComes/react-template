const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE;

module.exports = ({ production }) => {
  return {
    mode: production ? 'production' : 'development',
    name: 'react-template',
    entry: './src/main.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)?$/,
          include: [path.resolve(__dirname, 'src/')],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css?$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
      })
    ],
    devServer: {
      hot: true,
      server: {
        type: 'spdy'
      }
    },
    experiments: {
      outputModule: true,
      topLevelAwait: true
    },
    devtool: production ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: { '@': path.resolve(__dirname, 'src') }
    }
  };
};
