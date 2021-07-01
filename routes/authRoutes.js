const passport = require('passport');

module.exports = (app) => {
    // app.get('/',(req,res)=>{return res.send('oAuth')})
    app.get(
        '/auth/google',
        passport.authenticate('google',{
        //give us access to profile and email of the users
        scope:['profile','email']
        })
    );
    //this route has the code to get info from user profile
    app.get('/auth/google/callback',passport.authenticate('google'));
    app.get('/api/user',(req,res) =>{
        console.log(req.user)
        return res.send(req.user);
    });
}

