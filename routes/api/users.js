const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar, email:user.email }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// @route   POST api/users/profile
// @desc    Return current user profile
// @access  Private
router.post(
  '/user_profile',
  (req, res) => {
    User.findById(req.body.id)
      .then(user=>{
        res.json(user);
      });
  }
);

// @route   POST api/users/save_profile
// @desc    Save current user profile
// @access  Private
router.post(
  '/save_profile',
  (req, res) => {
    console.log(req.body.file);
    // let newUser = {}, message='';
    // newUser.first_name = req.body.first_name;
    // newUser.last_name = req.body.last_name;
    // newUser.birthday = req.body.birthday;
    // newUser.phone_number= req.body.phone_number;
    // newUser.nationality= req.body.nationality;
    // newUser.country= req.body.country;
    // newUser.direction= req.body.direction;
    // newUser.zipcode= req.body.zipcode;
    // newUser.bank_name= req.body.bank_name;
    // newUser.bank_number= req.body.bank_number;
    // newUser.swift_code= req.body.swift_code;
    // newUser.account_type= req.body.account_type;
    // // newUser.password = req.body.new_password;
    // console.log(req.body);
    // User.findOne({email: req.body.email})
    // .then((user) => {
    //   bcrypt.compare(req.body.current_password, user.password)
    //   .then(isMatch => {
    //     if (isMatch) {
    //       // console.log("Password is matched");
    //       bcrypt.genSalt(10, (err, salt) => {
    //         bcrypt.hash(req.body.new_password, salt, (err, hash) => {
    //           if (err) throw err;
    //           newUser.password = hash;
    //           console.log(hash)
    //         });
    //       });
    //     } else {
    //       message = "Orignal password is wrong!"
    //     }
    //   })
    // });

    // User.findOneAndUpdate(
    //   {email: req.body.email},
    //   { $set: newUser },
    //   { new: true }
    // ).then(user=>{
    //   res.json(user);
    // })
    // .catch(err=>console.log(err))
  }
);

module.exports = router;
