const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  comments: { type: String },
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
},
{
  timestamps: true
});

const Input = mongoose.model("Input", inputSchema);

module.exports = Input;
