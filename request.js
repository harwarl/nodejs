const { get } = require('https');

get('https://www.google.com', (res)=>{
res
.on('data', (chunk)=>{
    console.log(`data chunk ${chunk}`);
})
.on('error', (error)=>{
    console.log(`error ${error}`);
})
.on('end', ()=>{
    console.log('Done');
})
});
