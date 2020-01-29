require('dotenv').config();
const mongoose = require("mongoose");
(async function() {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    };
    try {
        await mongoose.connect(process.env.conString, options);
        console.log('connected to db');
    } catch (err) {
        console.log('error happened when connecting to db ' + JSON.stringify(err))
    };
})();