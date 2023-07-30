const express = require('express');
let admin = require("firebase-admin");
require('dotenv').config();

let serviceAccount = require("../tacticsdb-393323-firebase-adminsdk-uxmzf-e18f16d5ce.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tacticsdb-393323.firebaseio.com/'
});

const db = admin.database()

const app = express();
const port = process.env.PORT || 5050;

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


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});