const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Create new user
// @access Public

router.post('/', (req,res) => {
    res.json({body: req.body});
});

module.exports = router;