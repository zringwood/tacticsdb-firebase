const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require(`../${process.env.ADMIN_SERVICE_ACCOUNT}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database()

module.exports = { db}