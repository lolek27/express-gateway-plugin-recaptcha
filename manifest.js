module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/captcha-policy'));
    pluginContext.registerGatewayRoute(require('./routes/captcha'));

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  },
  policies:['recaptcha'] // this is for CLI to automatically add to "policies" whitelist in gateway.config
};
