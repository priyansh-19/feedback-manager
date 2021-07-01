const mongoose = require('mongoose');
const {Schema} = mongoose;

//The schema defines the input structure for the collection
const userSchema = new Schema({
    googleId : String,
});

//tell mongoose to create a new collection named musers based on userSchema.
mongoose.model('users', userSchema);