const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const form = document.querySelector('#form');
const formField = document.querySelectorAll('.form-field');


const isRequired = value => (value === '' ? false : true);

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.className = 'form-field error';
  const small = formField.querySelector('small');
  small.innerText = message;
};

const showSuccess = input => {
  const formField = input.parentElement;
  formField.className = 'form-field success';
};

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
  console.log(email.value);
});
