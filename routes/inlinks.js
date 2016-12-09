var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	console.log('POST inlinks/ req.body:', req.body);
	res.status(201).json({ id: 0 });
});

module.exports = router;
