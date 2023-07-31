const express = require('express');
const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require(`./${process.env.ADMIN_SERVICE_ACCOUNT}`);
console.log(process.env.DATABASE_URL)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database()

const app = express();
const port =  process.env.PORT || 5050;
const cors = require('cors')
const  corsOptions = { origin: 'https://tactics.zacharyringwood.com'}
app.use(cors(corsOptions))
// Define your routes and APIs here
//Serves an endgame puzzle with a given id
app.get("/middlegames/easy/:id", async (req, res) => {
    const puzzleId = req.params.id;

  try {
    const ref = admin.database().ref('endgames-easy');
    const snapshot = await ref.child(puzzleId).once("value");

    return res.status(200).send(snapshot);
  } catch (error) {
    console.error('Error fetching puzzle:', error);
    res.status(500).json({ error: 'Unable to fetch puzzle' });
  }
})


app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});