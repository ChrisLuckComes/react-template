const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-pxtorem'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('postcss-apply')
  ]
};
