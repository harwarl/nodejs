const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        // .......
    }
    
}

app.get('/', (req, res)=>{
    res.send(`Perfomance Example ${process.pid}`)
})

app.get('/timer', (req, res)=>{
    delay(9000);
    res.send(`Get request ${process.pid}`);
})

if(cluster.isMaster){
    console.log('Master is running');
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();   
    }
}else{
    app.listen(3000, ()=>{
        console.log('App is running on Workers')
    });
}