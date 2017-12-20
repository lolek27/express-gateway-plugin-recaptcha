var request = require('request');

module.exports = {
  name: 'recaptcha',
  policy: (actionParams) => {
    return (req, res, next) => {
      if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({ responseError: 'Please select captcha first' });
      }
      const secretKey = actionParams.secretKey || '';
      let remoteAddress = '';
      if (req.body.remoteAddress) {
        remoteAddress = `&remoteip=${req.body.remoteAddress}`;
      }

      const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}${remoteAddress}`;

      request(verificationURL, (error, response, body) => {
        const newbody = JSON.parse(body);

        if (newbody.success !== undefined && !newbody.success) {
          return res.json({ responseError: 'Failed captcha verification' });
        }
        res.json({ responseSuccess: 'Success' });
        next();
      });
    }
  }
};
