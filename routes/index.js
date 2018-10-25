var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  person = {};
  res.render('index', { title: 'BMI Form' })
});

router.post('/', function (req, res) {
  console.log(req.body);
  person = req.body.person;
  console.log(person);
  weight = parseFloat(person.weight);
  console.log(weight);
  height = parseFloat(person.height);
  console.log(height);
  bmi = weight / (height * height);
  console.log(bmi);
  res.render('index', {title: 'BMI Form', bmi: bmi, person: person})
});

module.exports = router;
