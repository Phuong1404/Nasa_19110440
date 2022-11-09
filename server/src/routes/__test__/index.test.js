const app = require('../../app')
const request = require('supertest')

//launches
describe('GET /launches', function () {
    it('responds data with json', function (done) {
        request(app)
            .get('/launches')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
describe('POST /launches', function () {
    it('Thiếu data truyền vào', async function () {
        const res = await request(app).post('/launches').send({ mission: 'john' })

        expect(res.statusCode).toEqual(400)
        expect(res.body.error).toEqual("Missing required launch property")
    });

    it('Format launchDate bị sai', async function () {
        const res = await request(app).post('/launches').send({ mission: 'john', rocket: '123123123', launchDate: '231231231212' })

        expect(res.statusCode).toEqual(400)
        expect(res.body.error).toEqual("Invalid launch date")
    })
    it('Thành công', async function () {
        const res = await request(app).post('/launches').send({ mission: 'john', rocket: '232123', launchDate: '2022-02-02' })

        expect(res.statusCode).toEqual(201)
    })
});

describe('DELETE /launches/:id', function () {
    it('id truyền vào không tồn tại', async function () {
        const res = await request(app).del('/launches/400')

        expect(res.statusCode).toEqual(404)
        expect(res.body.error).toEqual("Launch not found")
    });

    it('Thành công', async function () {
        const res = await request(app).del('/launches/101')

        expect(res.statusCode).toEqual(200)
    })
});
describe('GET /planets', function () {
    it('responds data with json', function (done) {
        request(app)
            .get('/planets')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
})
