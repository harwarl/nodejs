const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('Get launches', async () => {
        const response = await request(app)
            .get('/launches')
            .expect(200)
            .expect('Content-Type', /json/)
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
    })
})