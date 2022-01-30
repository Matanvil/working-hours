const express = require('express')
const router = express.Router()


/** Create a new work hours input document */
router.post('/api/input/new', async (req, res) => {
    const data = req.body
    res.status(200).send()
})

module.exports = router