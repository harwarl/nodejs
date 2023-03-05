const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');

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

app.use('/v1', api);
// app.use('/v2', v2Router);
app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;