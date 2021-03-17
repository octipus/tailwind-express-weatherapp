var express = require('express');
const bodyParser = require("body-parser");
const request = require("request");

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/weather', function(req,res){
  let zipcode = req.body.location;
  let apikey = process.env.API_KEY;
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apikey}`;
  request(url, function(err, response, body) {
    console.log(JSON.parse(body));
    res.render("weather", {title: "Weather"});
  });
});

module.exports = router;
