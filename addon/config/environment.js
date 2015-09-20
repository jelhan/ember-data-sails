'use strict';

var config = function (environment, appConfig) {
  var level = environment === 'production' ? 'error' : 'warn';
  if (appConfig.SAILS_LOG_LEVEL) {
    level = appConfig.SAILS_LOG_LEVEL;
  }
  return {
    LOG_LEVEL: level
  };
};

export default config;
