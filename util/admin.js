const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require(`../keys.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database()

module.exports = { db}