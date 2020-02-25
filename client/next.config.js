// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const dev = process.env.NODE_ENV !== 'production';
if (dev) {
    module.exports = withTypescript(withCSS(withSass()));
} else {
    module.exports = withSass(withTypescript(withCSS()))
}