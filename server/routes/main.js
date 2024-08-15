const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.send('Shut the hell up bro...');
})

module.exports = router;