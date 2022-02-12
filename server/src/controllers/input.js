process.env.TZ = "Asia/Jerusalem";
const Input = require("../models/input");

// const knownMonths = new Map([
//   [0, "Jan"],
//   [1, "Feb"],
//   [2, "Mar"],
//   [3, "Apr"],
//   [4, "May"],
//   [5, "Jun"],
//   [6, "Jul"],
//   [7, "Aug"],
//   [8, "Sep"],
//   [9, "Oct"],
//   [10, "Nov"],
//   [11, "Dec"],
// ]);

const saveInput = async (req, res) => {
  const data = req.body;
  const input = new Input({
    start: new Date(data.start).toString(),
    end: new Date(data.end).toString(),
    month: new Date(data.start).getMonth(),
    comments: data.comments,
  });
  try {
    await input.save();
    const newList = await getDocsThisMonth();
    res.status(200).send(newList);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getDocsByMonth = async (req, res) => {
  console.log(req.body);
};

const getDocsThisMonth = async () => {
  const date = new Date().getMonth();
  try {
    const results = await Input.find({
      month: date,
    });
    console.log(results);
    return results;
  } catch (err) {
    return err.message;
  }
};

module.exports = { getDocsByMonth, getDocsThisMonth, saveInput };
