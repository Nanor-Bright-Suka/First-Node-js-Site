const express = require('express');
const router = express.Router();
const messages = require("../messages")

router.get('/', (req, res) => {
    res.render('form', { title: 'Form Page'});
});


router.post('/newRoute', (req, res) => {
    const { author, message } = req.body; // This will be undefined without the middleware
    messages.push({ text: author, user: message, added: new Date() });
    res.redirect("/index")
});


module.exports = router;

