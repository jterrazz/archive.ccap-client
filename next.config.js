const withPWA = require('next-pwa');
const withSASS = require('@zeit/next-sass');

module.exports = withSASS(withPWA({
    pwa: {
        dest: 'public'
    }
}));