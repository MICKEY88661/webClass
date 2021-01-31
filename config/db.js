const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://mickey:CL0F0anFpzFHYemb@cluster0.u7imu.mongodb.net/test?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("mongoDB Connected..")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB