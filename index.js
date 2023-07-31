const express = require('express')
const app = express()
const port =  process.env.PORT || 5050;
const cors = require('cors')
const  corsOptions = { origin: process.env.FRONTEND_URL}
app.use(cors(corsOptions))



//Routes
const endgames = require("./routes/endgames.js")
const middlegames = require("./routes/middlegames.js")

app.use("/endgames", endgames)
app.use("/middlegames", middlegames)


app.listen(port,'0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});