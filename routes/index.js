var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .route("/login")
  .get((req, res) => {
    // res.send('Hii login');
  //  res.send({ title: 'Login' });
    res.json({ content: 'Leo' });
  })
  .post((req,res) =>{
    // Check 
    console.log(req.body);
    if((req.body.login === 'Léo')&&(req.body.pdw === '1234'))
    {
      res.json({ login: true})
    }
    else{
      res.json({ login: false})
    }
  })

module.exports = router;
