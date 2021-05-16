//This file will handle connection logic to MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TasManager', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log("Connected to MongDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});
module.exports = {
    mongoose
};