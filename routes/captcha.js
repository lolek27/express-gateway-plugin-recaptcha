
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function (gatewayExpressApp) {

  let middlewares = [
   cors(),
   bodyParser.urlencoded({ extended: true }),
   bodyParser.json(),

 ];

  gatewayExpressApp.all('/captcha', middlewares, (req, res, next) => {

    console.log('************ trigerring ROUTE /captcha');
    next();
  });
}
