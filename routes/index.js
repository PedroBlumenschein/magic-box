const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({
    data: 'helo from index.js GET'
  })
  //res.render('index');
});

module.exports = router;
