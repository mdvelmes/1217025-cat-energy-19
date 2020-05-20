var form = document.querySelector('.form__content');
var validateBtn = form.querySelector('.form__button');
var name = form.querySelector('.choose-program__cat-name-input');
var weight = form.querySelector('.choose-program__cat-weight-input');
var age = form.querySelector('.choose-program__cat-age-input');
var email = form.querySelector('.owner-info__email');
var telephone = form.querySelector('.owner-info__tel');



form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('clicked on validate');
  console.log('name: ', name.value);
  console.log('weight: ', weight.value);
  console.log('age: ', age.value);
  console.log('email: ', email.value);
  console.log('telephone: ', telephone.value);
});

var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
    }
  }
})
