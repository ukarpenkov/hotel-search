const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
    user: './src/user.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/pug/pages/navigation-page/navigation-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements-page.html',
      template: "./src/pug/pages/form-elements-page/form-elements-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'cards-page.html',
      template: "./src/pug/pages/cards-page/cards-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-and-footer-page.html',
      template: "./src/pug/pages/headers-and-footer-page/headers-and-footer-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'landing-page.html',
      template: "./src/pug/pages/landing-page/landing-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'registration-page.html',
      template: "./src/pug/pages/registration-page/registration-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details-page.html',
      template: "./src/pug/pages/room-details-page/room-details-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room-page.html',
      template: "./src/pug/pages/search-room-page/search-room-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room-page.html',
      template: "./src/pug/pages/search-room-page/search-room-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in-page.html',
      template: "./src/pug/pages/sign-in-page/sign-in-page.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-and-type.html',
      template: "./src/pug/components/colors-and-type/colors-and-type.pug"
    }),

  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {

                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'src/images/[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}