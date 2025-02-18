const mockGetAll = jest.fn();
const request = require('supertest');
const { generateManyBook } = require('../src/fakes/book.fake');
const createApp = require('../src/app');


jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => { },
})));

describe('Test for books', () => {
    let app = null;
    let server = null;
    beforeEach(() => {
        app = createApp();
        server = app.listen(3001)
    });
    afterAll(async () => {
        await server.close();
    });

    describe('test for [get] /api/v1/books ', () => {
        test('should retur list books', () => {
            const fakeBooks = generateManyBook(3);
            mockGetAll.mockResolvedValue(fakeBooks);
            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({ body }) => {
                    console.log(body)
                    expect(body.length).toEqual(fakeBooks.length);
                })
        }

        );
    });

});