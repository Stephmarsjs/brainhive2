const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();

const User = require('../../models/User')

// @route POST api/users
// @desc Create new user
// @access Public

router.post(
  '/',
  [
    check('email',  "Email is required").not().isEmpty(),
    check('email', "Valid Email required").isEmail(),
    check('name', "Name is required").not().isEmpty(),
    check('password', "Password must contain at least 6 characters").isLength({min: 6})
  ], 
  async (req,res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({errors: errors.array()})
      }
      const userData ={
          email: req.body.email,
          password: req.body.password
      }

      const salt = await bcrypt.genSalt(10)
      userData.password = await bcrypt.hash(userData.password, salt)

      const user = await User.create(userData)
      return res.json(user)
  }
);

module.exports = router;