const PORT = process.env.PORT || 8000;
const http = require('http');
const app = require('./app');

const { readHabitablePlanets } = require('./models/planets.model');

const server = http.createServer(app);
async function startServer(){
    await readHabitablePlanets();

    server.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    });
}

startServer()