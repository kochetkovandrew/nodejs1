jQuery(function() {
  $('#reset_button').click(function () {
    $(':text').val('');
  });
  $('#locale_button').click(function () {
    name = $('input[name="person[name]"]').val();
    weight = parseFloat($('input[name="person[weight]"]').val());
    height = parseFloat($('input[name="person[height]"]').val());
    bmi = weight / (height * height);
    message = name + '\'s BMI is ' + bmi + ' (calculated locally)';
    $('#local_message').html(message);
    // res.render('index', {title: 'BMI Form', bmi: bmi, person: person})
  });
});