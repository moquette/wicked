const sassResourcesLoader = require("craco-sass-resources-loader");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  mode: "development",
  output: {
    path: __dirname,
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: "./src/assets/scss/utils/_utils.scss",
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        // purgecss({
        //   content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
        // }),
      ],
    },
  },
};
