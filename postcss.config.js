const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/index.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
