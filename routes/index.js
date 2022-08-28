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
    res.json({ header: 'Flavio',
                content: 'Leo' });
  })

module.exports = router;
