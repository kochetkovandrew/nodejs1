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
  var st = person.date;
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var dt = new Date(st.replace(pattern,'$3-$2-$1'));
  store.ready(async () => {
    try {
      const bmi_instance = await store.Model('Bmi').create({name: person.name, weight: weight, height: height, date: dt});
      // const bmi = await store.Model('Bmi').find(1);
      console.log(bmi_instance);
    } catch(error) {
      console.error(error);
    }
  })


  res.render('index', {title: 'BMI Form', bmi: bmi, person: person})
});

module.exports = router;
