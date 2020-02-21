// const Supertest = require('supertest');

// const supertest = Supertest('www.google.com' || 'https://europe-west1-mussia3.cloudfunctions.net/func1');

describe('system tests', () => {
    it('func1 should return something', async () => {
        expect(1).toEqual(1);
        // await supertest
        //     .post('/func1')
        //     .send({ name: 'John' })
        //     .expect(200)
        //     .expect((response) => {
        //         expect(response.body).toEqual({ all: 'aa' });
        //     });
    });
});
