const express = require('express');
const router = express.Router();
const ip = require("ip")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.WELCOME_MESSAGE + ip.address() });
});

module.exports = router;
