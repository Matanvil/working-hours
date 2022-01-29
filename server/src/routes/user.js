const express = require('express')
const router = express.Router();

router.post("/api/users/login", async (req, res) => {
    console.log(req.body);
    res.status(200).send()
})

module.exports = router