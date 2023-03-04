const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('Get launches', (done) => {
        request(app)
            .get('/launches')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect((res)=>{
                res.body.length = 5;
            })
            .end((err, res) =>{
                if (err) return done(err);
                return done();
            })
    })
})

describe('Test POST /launches', () => {
    const completeLaunchData = {
        "mission": "mission Mars",
        "launchDate": "January 12, 2034",
        "rocket": "explorer - e",
        "target": "moon"
    }
    const launchDataWithoutDate = {
        "mission": "mission Mars",
        "rocket": "explorer - e",
        "target": "moon"
    }
    test('POST launches should respond with  200 success', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201)


            const requestDate = new Date(completeLaunchData.launchDate).valueOf();
            const responseDate = new Date(response.body.launchDate).valueOf();

            // expect(responseDate).toBe(requestDate)

            // expect(response.body).toMatch(launchDataWithoutDate)
    })
})