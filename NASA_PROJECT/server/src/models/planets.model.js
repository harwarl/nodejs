const fs = require('fs');
const { parse } = require('csv-parse');
const path = require('path');

const result = [];

const habitablePlanet = [];

function ishabitablePlanets(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

function readHabitablePlanets() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', (data) => {
                if (ishabitablePlanets(data)) {
                    habitablePlanet.push(data);
                }
            })
            .on('error', (error) => {
                console.log(error);
                reject(error);
            })
            .on('end', () => {
                console.log(`${habitablePlanet.length} habitable planets found`);
                resolve();
            })
        })
    }

function getAllPlanets(){
    return habitablePlanet;
}


module.exports = {
    readHabitablePlanets,
    getAllPlanets
}