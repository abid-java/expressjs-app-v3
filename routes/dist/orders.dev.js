"use strict";

var express = require('express');

var router = express.Router();
/* GET orders listing. */

router.get('/', function (request, response, next) {
  response.send('respond with a resource');
});
module.exports = router;
//# sourceMappingURL=orders.dev.js.map
