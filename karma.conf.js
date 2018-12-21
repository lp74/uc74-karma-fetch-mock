module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: [ 'jasmine', 'polyfill'],
    polyfill: ['Promise', 'fetch'],
    files: [
      'node_modules/fetch-mock-es5/es5/client-bundle.js',
      'spec/**/*.spec.js',
    ],
    browsers: ['PhantomJS'],
    autoWatch: true
  });
};
