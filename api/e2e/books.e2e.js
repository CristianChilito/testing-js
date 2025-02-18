
const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');



const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
    let app = null;
    let server = null;
    let databaase = null;
    beforeAll(async () => {
        app = createApp();
        server = app.listen(3002)
        const client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        databaase = client.db(DB_NAME);
    });
    afterAll(async () => {
        await server.close();
        await databaase.dropDatabase();
    });

    describe('test for [get] /api/v1/books ', () => {
        test('should retur list books', async () => {

            const seedData = await databaase.collection('books').insertMany([
                {
                    name: 'harry el regreso',
                    year: 2025,
                    author: 'CDC',

                },
                {
                    name: 'harry el regreso 2 ',
                    year: 2025,
                    author: 'CDC',

                },
            ]);

            return request(app)
                .get('/api/v1/books')
                .expect(200)
                .then(({ body }) => {
                    console.log(body)
                    expect(body.length).toEqual(seedData.insertedCount);
                })
        }

        );
    });

});