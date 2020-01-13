const Supertest = require('supertest');

const supertest = Supertest(process.env.BASE_URL || 'https://europe-west1-mussia3.cloudfunctions.net/func1');

describe('system tests', () => {
    it('func1 should return something', async () => {
        await supertest
            .post('/func1')
            .send({ name: 'John' })
            .expect(200)
            .expect((response) => {
                expect(response.body).toEqual({ all: 'aa' });
            });
    });
});
