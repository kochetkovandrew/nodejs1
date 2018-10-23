
/*
 * GET home page.
 */

exports.index = function(req, res) {
  person = {};
  res.render('index', { title: 'BMI Form' })
};

exports.index_post = function(req, res) {
  console.log(req.body);
  person = req.body.person;
  weight = parseFloat(person.weight);
  height = parseFloat(person.height);
  bmi = weight / (height*height);
  res.render('index', { title: 'BMI Form', bmi: bmi, person: person })
};