const httpServer = require('http');
PORT = 3000;

const server = httpServer.createServer()

const friends = [
    {
        id: 0,
        name: 'Oduwale'
    },
    {
        id: 1,
        name: 'Max'
    },
    {
        id: 2,
        name: 'Tomas'
    },
    {
        id: 3,
        name: 'Dokun'
    }
]

server.on('request', (req, res)=>{
    const items = req.url.split('/') ;
    console.log(items[1]);
    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data)=>{
            const friend = data.toString();
            console.log(`Request: `, friend);
            friends.push(JSON.parse(friend));
        })
        req.pipe(res);
    }else if(req.method === 'GET' && items[1] === 'friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3){
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]))
        }else(
            res.end(JSON.stringify(friends))
        )
    }
    else if(req.method === 'GET' && items[1] === 'messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<ul>');
        res.write('<li>Hello Sir</li>');
        res.write('<li>Http Api</li>');
        res.write('</ul>');
        res.write('</html>');
        res.end();
    }
})
server.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})