const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport')
require ('./models/User');
//condensed down to only require statement
require('./services/passport');
mongoose.connect(keys.mongoURI);

app.use(
    cookieSession({
        maxAge : 30*24*60*60*100,
        keys : [keys.cookieKey] // can provide multiple keys and one is selected at random
    })
);
//tell passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());
// const PORT = processess.env.PORT || 5000
require('./routes/authRoutes')(app);


app.listen(5000);
console.log('running on port 5000')