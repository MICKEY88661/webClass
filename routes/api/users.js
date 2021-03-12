const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator')

// Error-handling middleware
router.use(function (err, req, res, next) {
    res.status(500).send('Something broke!')
})

// log salt
const saltFunc = async (req, res, next) => {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //         errors: errors.array()
    //     });
    // }

    console.log(req.body);

    const {
        name,
        email,
        password
    } = req.body;

    let user = await User.findOne({
        email
    });

    if (user) {
         res.status(400).json({
            errors: 'user exist'
        });
    }

    user = new User({
        name,
        email,
        password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.send(`salt : ${salt}`)
}

router.post('/',
    [check('name').notEmpty(),
        check('email').isEmail(),
        check('password').isLength({
            min: 5
        })
    ],
    saltFunc);

router.get('/mickey', (req, res) => res.send('mickey page'));
router.get('/nina', errorFunc, (req, res) => res.send('nina page'));


// error occur
function errorFunc(req, res, next) {
    try {
        throw new Error('BROKEN')
    } catch (error) {
        console.log('error!!');
        next(error);
    }
}

module.exports = router;