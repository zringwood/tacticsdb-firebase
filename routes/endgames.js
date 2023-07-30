const express = require('express')
const router = express.Router();

//Serves an endgame puzzle with a given id
router.get("/:id", async (req, res) => {
    const puzzleId = req.params.id;

  try {
    const puzzle = await db.collection('endgames-easy').doc(puzzleId).get();
    
    if (!puzzle.exists) {
      console.log('Puzzle not found');
      res.status(404).json({ error: 'Puzzle not found' });
      return;
    }

    console.log('puzzle.data():', puzzle.data());

    
    res.json(puzzle.data());
  } catch (error) {
    console.error('Error fetching puzzle:', error);
    res.status(500).json({ error: 'Unable to fetch puzzle' });
  }
})


module.exports = router;