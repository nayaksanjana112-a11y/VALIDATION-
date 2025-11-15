function validateName() {
 const name = document.getElementById("fullName").value.trim();
 const error = document.getElementById("nameError");
 if (name.length < 5) {
 error.textContent = "Name must be at least 5 characters long.";
 return false;
 } else {
 error.textContent = "";
 return true;
 }
}
function validateEmail() {
 const email = document.getElementById("email").value.trim();
 const error = document.getElementById("emailError");
 if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
 error.textContent = "Enter a valid email address.";
 return false;
 } else {
 error.textContent = "";
 return true;
 }
}
function validatePhone() {
 const phone = document.getElementById("phone").value.trim();
 const error = document.getElementById("phoneError");
 if (phone === "1234567890" || phone.length !== 10 || isNaN(phone)) {
 error.textContent = "Enter a valid 10-digit phone number.";
 return false;
 } else {
 error.textContent = "";
 return true;
 }
}
function validatePassword() {
 const password = document.getElementById("password").value.trim();
 const name = document.getElementById("fullName").value.trim().toLowerCase();
 const error = document.getElementById("passwordError");
 if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name) {
 error.textContent = "Password is not strong.";
 return false;
 } else {
 error.textContent = "";
 return true;
 }
}
function validateConfirmPassword() {
 const password = document.getElementById("password").value.trim();
 const confirm = document.getElementById("confirmPassword").value.trim();
 const error = document.getElementById("confirmError");
 if (password !== confirm) {
 error.textContent = "Passwords do not match.";
 return false;
 } else {
 error.textContent = "";
 return true;
 }
}
function validateForm() {
 const isNameValid = validateName();
 const isEmailValid = validateEmail();
 const isPhoneValid = validatePhone();
 const isPasswordValid = validatePassword();
 const isConfirmValid = validateConfirmPassword();
 if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid) {
 alert("Form submitted successfully!");
 return true;
 } else {
 alert("Please fix the errors before submitting.");
 return false;
 }
}