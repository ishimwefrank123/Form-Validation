
const name = document.getElementById('name');

const email = document.getElementById('email');

const password = document.getElementById('password');

const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
form.addEventListener('submit',(e)=>{

  let emailCkeck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  if(name.value === '' || name.value==null){
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  }else{
    name_error.innerHTML = "";
  }

  if(!email.value.match(emailCkeck)){
    e.preventDefault();
    email_error.innerHTML = "Valid Email is required";
  }else{
    email_error.innerHTML = "";
  }

  if(password.value.length <= 5){
    e.preventDefault();
    password_error.innerHTML = "Password must be more than 6 characters";
  }else{
    password_error.innerHTML = "";
  }

  if(password.value.length >= 20){
    e.preventDefault();
    password_error.innerHTML = "Password must not be more than 20 characters";
  }

  if(password.value ==='password'){
    e.preventDefault();
    password_error.innerHTML = "Password must not be password";
  }
})