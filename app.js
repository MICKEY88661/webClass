const connectDB = require('./config/db')
const express = require('express')
const app = express()

connectDB()

// Built-in middleware
app.use(express.static(__dirname + '/public '));

// Application-level middleware
app.use(timeLogger);


app.get('/',(req, res) => res.send('hello world'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))

app.listen(3000)

// log time
function timeLogger(req, res, next) {
    console.log('Time:', Date.now());
    next();
}