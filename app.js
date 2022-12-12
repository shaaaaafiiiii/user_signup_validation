// username validation
const username = document.getElementById("username");
const userError = document.getElementById("userError");
username.addEventListener("input", checkUsername);
const userNamePattern = /^[a-z0-9]{5,12}$/i;
function checkUsername(event) {
  const userInput = event.target.value;
  const isValid = userNamePattern.test(userInput);
  if (isValid) {
    userError.style.opacity = 0;
    username.className = "valid";
  } else {
    userError.style.opacity = 1;
    username.className = "invalid";
  }
}
// email validation
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
email.addEventListener("input", checkEmail);
const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
function checkEmail(event) {
  const userInput = event.target.value;
  const isValid = emailPattern.test(userInput);
  if (isValid) {
    emailError.style.opacity = 0;
    email.className = "valid";
  } else {
    emailError.style.opacity = 1;
    email.className = "invalid";
  }
}

// phone number validation
const phone = document.getElementById("phone");
const phonError = document.getElementById("phoneError");
phone.addEventListener("input", checkPhone);
const phonePattern = /^01[3-9][0-9]{8}$/;
function checkPhone(event) {
  const userInput = event.target.value;
  const isValid = phonePattern.test(userInput);
  if (isValid) {
    phonError.style.opacity = 0;
    phone.className = "valid";
  } else {
    phonError.style.opacity = 1;
    phone.className = "invalid";
  }
}

// password  validation
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
password.addEventListener("input", checkPassword);
const passwordPattern = /^[\w@-]{8,20}$/i;
function checkPassword(event) {
  const userInput = event.target.value;
  const isValid = passwordPattern.test(userInput);
  if (isValid) {
    passwordError.style.opacity = 0;
    password.className = "valid";
  } else {
    passwordError.style.opacity = 1;
    password.className = "invalid";
  }
}

// slug  validation
const slug = document.getElementById("slug");
const slugError = document.getElementById("slugError");
slug.addEventListener("input", checkSlug);
const slugPattern = /^[a-z\d-]{8,20}$/;
function checkSlug(event) {
  const userInput = event.target.value;
  const isValid = passwordPattern.test(userInput);
  if (isValid) {
    slugError.style.opacity = 0;
    slug.className = "valid";
  } else {
    slugError.style.opacity = 1;
    slug.className = "invalid";
  }
}
