const path = require("path")
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user")

const port = process.env.PORT || 4000;

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "../../client")))

app.use(userRouter)



app.listen(port, () => {
    console.log("server is running on port " + port);
})