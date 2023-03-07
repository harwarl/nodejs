const https = require('https');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
require('dotenv').config();


const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
};


passport.use(new Strategy(AUTH_OPTIONS, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
}));

const app = express();

app.use(helmet());
app.use(passport.initialize());

function checkLoggedIn(req, res, next) {
    const isLoggedIn = true;
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
        session: false
    }), (req, res, next) => {
        console.log('Oauth done');
    })

app.get('/auth/logout', (req, res, next) => {

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