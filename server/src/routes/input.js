const express = require("express");
const router = express.Router();
const Input = require("../models/input");
const {
  saveInput,
  getDocsThisMonth,
  deleteOneInput,
} = require("../controllers/input");

/** Create a new work hours input document */
router.post("/api/input/new", saveInput); // TODO: add auth middleware and test

/** Get latest inputs from this month **/
router.get("/api/input/latest", async (req, res) => {
  const result = await getDocsThisMonth();
  res.status(200).send(result);
});
/** delete single item **/
router.delete("/api/input/:inputId", deleteOneInput);

module.exports = router;
