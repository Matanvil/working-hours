const { connect } = require("mongoose");

async function connectToDb() {
  try {
    connection = await connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MongoDB");
  } catch (e) {
    console.log("error connecting to MongoDB" + e.message);
  }
}

module.exports = connectToDb;
