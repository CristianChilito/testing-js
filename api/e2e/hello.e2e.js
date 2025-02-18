const request = require('supertest');

const createApp = require('../src/app');
const { response } = require('express');

describe('Test for hello endpoind', () => {
    let app = null;
    let server = null;
    beforeEach(() => {
        app = createApp();
        server = app.listen(3001)
    });
    afterAll(async () => {
        await server.close();
    });

    describe('test for [get] / ', () => {
        test('should retur hello work', () => {
            request(app)
                .get('/')
                .expect(200)
                .then((response) => {
                    expect(response.text).toEqual('Hello World!');
                })
        });
    });

});