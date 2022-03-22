var express = require('express');
var router = express.Router();
const Logic = require('../logic')

router.post('/register', async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const response = await Logic.User.register(firstName, lastName, email, password);

        if (response == 400) return res.status(400).send("User information verification error.");
        if (response == 409) return res.status(409).send("User already exists.");

        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
