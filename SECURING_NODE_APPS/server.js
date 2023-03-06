const https = require('https');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.get('/secret', (req, res, next)=>{
    res.send('The secret is 42!')
})

app.get('/', (req, res, next)=>{
    res.send('testing');
})

https
.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app)
.listen(8000, ()=>{
    console.log('App is running on port 3000');
})