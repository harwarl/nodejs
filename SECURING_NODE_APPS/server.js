const https = require('https');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { Strategy } = require('passport-google-oauth20');
require('dotenv').config();


const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
};


passport.use(new Strategy(AUTH_OPTIONS, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));

//save session to cookie
passport.serializeUser((user, done)=>{
    //could as well pass in the whole user but that would make the cookie large.
    done(null, user.id); 
})

passport.deserializeUser((id, done)=>{
    /*
    could use a middle ware here thou
    User.findById(id) then save user to req.user
    The above statement is not needed. Passport automatically makes req.user available
    */
    done(null, id);
})
const app = express();

app.use(helmet());

app.use(cookieSession({
    name: 'Node-Session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2 ]
}))

app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req, res, next) {
    console.log(`Current user is :${req.user}`);
    const isLoggedIn = req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log In'
        });
    }
    next();
}

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }))

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: true // or leave it empty
    }), (req, res, next) => {
        console.log('Oauth done');
    })

app.get('/auth/logout', (req, res, next) => {
    req.logout();
    return res.redirect('/');
})

app.get('/secret', checkLoggedIn, (req, res, next) => {
    return res.send('The secret is 42!')
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

https
    .createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app)
    .listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })