var express = require('express');
var router = express.Router();
const Logic = require('../logic')
const { getReasonPhrase } = require('http-status-codes');

router.post('/register', async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const response = await Logic.User.register(firstName, lastName, email, password);

        if (!response.message) response.message = getReasonPhrase(response.status);

        return res.status(response.status).json(response);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
