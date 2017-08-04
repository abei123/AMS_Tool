var config = {};

config.db = {};
config.web = {};

config.web.port = process.env.WEB_PORT || 3000;

module.exports = config;
