const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Genres page');
});

module.exports = router;