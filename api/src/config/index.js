require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.MONGO_URL || 'mongodb://test:test123@localhost:27017?retryWrites=true&writeConcern=majority',
  dbName: process.env.MONGO_DB_NAME,
};

module.exports = { config };
