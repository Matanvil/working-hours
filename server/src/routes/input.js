const express = require('express')
const router = express.Router()
const Input = require('../models/input')
const {parseDateTime} = require('../utils/parseDateTime')


/** Create a new work hours input document */
router.post('/api/input/new', async (req, res) => {
    const data = req.body
    const parsedTime = parseDateTime(data)
    console.log(parsedTime);
    res.status(200).send(parsedTime)
})

module.exports = router