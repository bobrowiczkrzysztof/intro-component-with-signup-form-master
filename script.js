const firstNameEl = document.querySelector('#first-name');
const lastNameEl = document.querySelector('#last-name');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
  e.preventDefault();
});

const isRequired = value => value === '' ? false : true;