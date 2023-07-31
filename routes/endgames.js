const express = require('express')
const router = express.Router();
const {db }= require('../util/admin')


//This looks repetitive, but it's a way to "sanitize" the queries. If we let the frontend decide the collection
//being queried by passing a string (ie /:difficulty/:id), then we're vulnerable to injection. Better to hardcode
//the collections. 
router.get("/easy/:id", async (req, res) => {
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


module.exports = router;