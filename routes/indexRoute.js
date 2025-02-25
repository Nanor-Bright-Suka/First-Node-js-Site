const express = require('express');
const router = express.Router();
const messages = require("../messages")


router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', messages: messages });
});


module.exports = router;

