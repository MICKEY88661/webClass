const express = require('express');
const router = express.Router();

router.get('/mickey', (req, res) => res.send('mickey page'));
router.get('/nina',errorFunc, (req, res) => res.send('nina page'));

// Error-handling middleware
router.use(function (err, req, res, next) {
    // console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router;

// error occur
function errorFunc(req, res, next) {
    try {
        throw new Error('BROKEN')
    } catch (error) {
        console.log('error!!');
        next(error);
        return;
    }
    next();
}