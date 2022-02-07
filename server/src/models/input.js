const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  comments: { type: String },
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  month: {type: String},
  owner: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "User"} // TODO: fix ref to owner once login has been implemented
},
{
  timestamps: true
});

const Input = mongoose.model("Input", inputSchema);

module.exports = Input;
