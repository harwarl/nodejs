const fs = require('fs');
const parse = require('csv-parse');

const result = [];

fs.createReadStream('kepler_data.csv')
.on('data', (data)=>{
    result.push(data);
})
.on('error', (error)=>{
    console.log(error);
})
.on('end', ()=>{
    console.log(result);
    console.log("done");
})
