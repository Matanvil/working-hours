const Input = require("../models/input");

const knownMonths = new Map([
  [0, "Jan"],
  [1, "Feb"],
  [2, "Mar"],
  [3, "Apr"],
  [4, "May"],
  [5, "Jun"],
  [6, "Jul"],
  [7, "Aug"],
  [8, "Sep"],
  [9, "Oct"],
  [10, "Nov"],
  [11, "Dec"],
]);

const saveInput = async (req, res) => {
  const data = req.body;
  const month = new Date(data.start).getMonth() - 1;
  console.log(month);
  const input = new Input({
    start: data.start,
    end: data.end,
    month: knownMonths.get(month),
    comments: data.comments,
  });
  try {
    await input.save();
    res.status(200).send(input);
    getLatestDocs();
  } catch (err) {
    res.status(500).send(err);
  }
};

const getDocsByMonth = async (req, res) => {
  console.log(req.body);
};

const getLatestDocs = async () => {
  const date = new Date().getMonth();
  const monthStr = knownMonths.get(date)
  try {
    const results = await Input.find({
      month: monthStr,
    });
    return results;
  } catch (err) {
    return err.message;
  }
};

module.exports = { getDocsByMonth, getLatestDocs, saveInput };
