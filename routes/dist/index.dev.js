"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */
//http://localhost:3000/

router.get('/', function (request, response, next) {
  response.render('index', {
    title: 'Express',
    subtitle: 'Welcome to best Youtube Audience'
  });
});
/* GET home page. */
//http://localhost:3000/angular

router.get('/angular', function (request, response, next) {
  response.render('index', {
    title: 'Express - Angular',
    subtitle: 'Welcome to best Angular Audience'
  });
});
/* GET home page. */
//http://localhost:3000/tutorials?course=angular

router.get('/tutorials', function (request, response, next) {
  console.log("<===== Request Query Parameters =====>");
  console.log(request.query);
  var courseName = request.query.course;
  response.render('index', {
    title: 'Express - ' + courseName,
    subtitle: 'Welcome to best Angular Audience'
  });
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
