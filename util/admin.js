let admin = require("firebase-admin");
require('dotenv').config();

let serviceAccount = require("../tacticsdb-393323-firebase-adminsdk-uxmzf-e18f16d5ce.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tacticsdb-393323-default-rtdb.firebaseio.com'
});

const db = admin.firestore()

module.exports = { db}