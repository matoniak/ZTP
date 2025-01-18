module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular'),
      require('karma-chrome-launcher'),
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    browsers: ['Chrome','ChromeHeadless'],
    singleRun: true,
  });
};
