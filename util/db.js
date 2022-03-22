const mongoose = require('mongoose');

/**
 * Connect Mongoose
 */
async function connectMongoose() {
    const URI = process.env.MONGODB_URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(URI, options);
        console.log('Succesfully connected to mongoose');
    } catch (err) {
        console.error('Failed to connect to mongoose :', URI);
        console.error(err);
    }
};

module.exports = { connectMongoose };