const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    watchFiles: ["./src/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /apikey.js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { grid: true }],
                  ["cssnano", { preset: "default" }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            // コード整形オプション（これがないとminファイルのようになる）
            options: {
              pretty: true,
              root: path.resolve(__dirname, "./src/pug"),
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true }, // ビルド時に console.log を削除.
        },
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pug/index.pug",
      filename: "index.html",
    }),
  ],
};
