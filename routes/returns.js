const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();


router.post('/', (req,res) => {
    res.status(401).send('Unauthorized');
});

module.exports = router;
