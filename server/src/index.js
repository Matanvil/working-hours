const path = require("path");
const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors");
const connectToDb = require('./mongodb')
const userRouter = require("./routes/user");
const inputRouter = require("./routes/input");

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../client")));

app.use(userRouter);
app.use(inputRouter);

connectToDb().then(() => {
  app.listen(port, () => {
    console.log("server is running on port " + port);
  });
})
