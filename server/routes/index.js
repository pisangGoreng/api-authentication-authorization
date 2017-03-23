var express = require('express');
var router = express.Router();
var oauth = require('../helper/oauth.js')
var jwt = require('../helper/jwt.js')
var Content = require('../models/articleSchema')
var helperContent = require('../helper/content.js')

router.post('/register', oauth.register);
router.post('/login', oauth.login)

module.exports = router;
