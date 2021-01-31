const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator')

// Router-level middleware
router.get('/login', checkLogin, (req, res) => res.send(`login ${req.admin} page`));
router.get('/register', [
    check('email')
    .isEmail(),
    check('password')
    .isLength({
        min: 5
    })
], (req, res) => res.send('register page'));

module.exports = router;

// check admin
function checkLogin(req, res, next) {
    req.query.admin === 'true' ?
        req.admin = true :
        req.admin = false

    next();
}