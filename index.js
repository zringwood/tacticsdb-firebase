const express = require('express')
const {db }= require('./util/admin.js')

const app = express();
const port =  process.env.PORT || 5050;
const cors = require('cors')
const  corsOptions = { origin: process.env.FRONTEND_URL}
app.use(cors(corsOptions))

//Serves an endgame puzzle with a given id
app.get("/middlegames/easy/:id", async (req, res) => {
    const puzzleId = req.params.id;

  try {
    const ref = db.ref('endgames-easy');
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