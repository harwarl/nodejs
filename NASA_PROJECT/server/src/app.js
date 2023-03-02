const express = require('express');
const cors = require('cors');
const path = require('path');
const planetRouter = require('./routes/planets/planets.router');
const launchRouter = require('./routes/launches/launch.router');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use('/planets', planetRouter);
app.use('/launches', launchRouter);

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;