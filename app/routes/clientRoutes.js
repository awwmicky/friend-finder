const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            '../client/index.html'
        )
    )
});

router.get('/survey', (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            '../client/survey.html'
        )
    )
});

/*  */
module.exports = router;