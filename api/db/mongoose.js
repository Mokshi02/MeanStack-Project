//This file will handle connection logic to MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TasManager', { useNewUrlParser: true}).then(() => {
    console.log("Connected to MongDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//To prevent deprectation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = {
    mongoose
};