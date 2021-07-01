const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose');

//load the mongoose schema(class)
const User =  mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
async (accessToken,refreshToken,profile,done) => {
    //this is a callback.
    //access token comes back from google.
    //check if the user had already signed up
    //requests to mongo db are async
    const found = await User.findOne({googleId:profile.id});
    if(!found){
        //user already eists
        const userSaved = await new User({googleId:profile.id}).save();
        done(null,userSaved);
    }
    //done(error, userRecord) send this to passport
    done(null,found)
})
);