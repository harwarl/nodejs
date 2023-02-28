const axios = require('axios');

axios.get('http://www.google.com')
.then((response)=>{
    console.log(`response chunk ${response}`);
})
.catch(err =>{
    console.log(`Error ${err}`)
})
.then(()=>{
    console.log('Done');
})