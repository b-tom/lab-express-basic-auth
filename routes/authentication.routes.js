const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');

router.get('/', (req, res) => {
    res.render('signup-form');
});

router.post('/', (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password ){
        res.render('signup-form', { errorMessage: 'All fields are mandatory!'});
        return;
    }

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedPassword => {
            return User.create({
                username,
                email,
                passwordHash: hashedPassword
            });
        })
        .then(userDoc => console.log(userDoc))
        .catch(err => console.log(err));
});

module.exports = router;