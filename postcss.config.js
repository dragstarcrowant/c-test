const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

const whitelistPatterns = [/w-[0-9]*\/12/];

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        ...process.env.NODE_ENV === 'production'
        ? [purgecss({
            content: ['src/**/*.js', 'src/**/*.scss'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelistPatterns: whitelistPatterns
        })]
        : [],
        autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }),
    ],
};