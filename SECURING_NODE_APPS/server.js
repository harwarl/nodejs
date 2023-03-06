const https = require('https');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const PORT = 8000;

const app = express();

app.use(helmet());

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
.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
})