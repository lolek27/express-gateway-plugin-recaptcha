# express-gateway-plugin-recaptcha
Express gateway plugin for verifying recaptcha on server side. Part of server side integration reCAPTCHA mechanism separated into a plugin and transferred to express gateway middleware.
Based on [example plugin](https://github.com/ExpressGateway/express-gateway-plugin-example) for [Express Gateway](http://www.express-gateway.io/)

### Installation:

Simply type from your shell environment:

```bash
eg plugin install lolek27/express-gateway-plugin-recaptcha
```

## Quick start

In order to use this middleware be sure to make a post request from your site to your express middleware server, including two fields in the body:

`g-recaptcha-response`: (required) The value of 'g-recaptcha-response' you get from Google server after checking the captcha plugin on your site.

`remoteAddress`: (optional) The end user's ip address.

1. Make sure the plugin is listed in [system.config.yml file](https://www.express-gateway.io/docs/configuration/system.config.yml/).
This is done automatically for you if you used the command above.

2. Add the configuration keys to [gateway.config.yml file](https://www.express-gateway.io/docs/configuration/gateway.config.yml/).

```yaml
policies:
      - captcha:
          - action:
              secretKey: '_____YOUR_SECRET_KEY_____'
```

### Configuration Parameters

`secretKey`: The secret key you get from Google reCAPTCHA. Use this for communication between your site and Google. Be sure to keep it a secret.


### Additional documentation:

[Express Gateway Overview](http://www.express-gateway.io/about/)

Express Gateway plugin explanation:
[Plugin Documentation](http://www.express-gateway.io/docs/plugins/)
