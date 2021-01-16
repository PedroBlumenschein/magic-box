const express = require('express');
const router  = express.Router();
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {

  axios.post(
    'https://hooks.slack.com/services/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',
    {
      text: 'H'
    }
  )
  .then( data => {
    res.status(200).json(data)
    //console.log(data)
  })
  .catch( err => console.log(err))
  
  // res.status(200).json({
  //   data: 'helo from slack.js GET'
  // })
});

module.exports = router;