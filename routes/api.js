'use strict';
var express = require('express');
var router = express.Router();

/* GET api page. */
router.get('/', function (req, res) {
    res.json({ message: "Hello from server!" });
});

module.exports = router;