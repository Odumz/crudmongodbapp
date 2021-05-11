const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create profile schema & model
const ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    country: {
        type: String,
        required: [true, 'Country field is required']
    }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;