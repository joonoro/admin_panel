var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        token: req.session.token
    });
});

module.exports = router;
