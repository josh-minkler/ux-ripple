const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js' 
  },
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: [{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }],
            css: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function() {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              },
            ]
          },
          cacheBusting: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './src/template.html'
    })
  ]
};
