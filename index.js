const express = require('express')
const app = express()
const port =  process.env.PORT || 5050;
const cors = require('cors')
const  corsOptions = { origin: process.env.FRONTEND_URL}
app.use(cors(corsOptions))

//Serve an introductory puzzle. 
app.get("/introduction/easy/:id", (req, res) => {
  const id = req.params.id
  const puzzles = [
      {
          moves: "b5a5 d3b5", 
          fen: "8/3B4/8/1k6/8/3Q4/8/6K1 b - - 1 1", 
          themes: "checkmateTheKing!"
      },
      {
          moves: "b7c8 d7c8", 
          fen: "8/1b1P4/8/1k3K2/8/8/8/8 b - - 1 1", 
          themes: "promoteThePawn!"
      }
  ]
  if(id < 1 || id > puzzles.length){
      res.status(404).send(`No introductory puzzle with id ${id} found!`)
  }
 res.status(200).send(puzzles[id-1])
})
//Routes
const endgames = require("./routes/endgames.js")
const middlegames = require("./routes/middlegames.js")

app.use("/endgames", endgames)
app.use("/middlegames", middlegames)


app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});