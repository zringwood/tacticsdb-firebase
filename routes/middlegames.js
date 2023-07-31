const express = require('express')
const router = express.Router();
const {db }= require('../util/admin')


router.get("/:difficulty/:id", async (req, res) => {
  const puzzleId = req.params.id;
  const difficulty = req.params.difficulty
try {
  const ref = db.ref(`middlegames-${difficulty}`);
  const snapshot = await ref.child(puzzleId).once("value");

  return res.status(200).send(snapshot);
} catch (error) {
  console.error('Error fetching puzzle:', error);
  res.status(500).json({ error: 'Unable to fetch puzzle' });
}
})


module.exports = router;