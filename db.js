const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shopify-js-admin:lgrQQSfYDqZ08qwu@shopify-js.bgiu5.mongodb.net/crudappdb?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection success");
    } catch (error) {
        console.log("MongoDB connection fail");
        process.exit(1);
    }
}

module.exports = connectDB;