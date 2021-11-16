function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Regex
const regexEmail = /^[0-9a-zA-Z-._]{1,64}@[a-zA-Z0-9]{1,64}.[a-z]{1,64}$/;
const regexBirthdate = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
const regexQuantity = /^[0-9]{1,2}$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const submit = document.getElementById("submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// submit event
submit.addEventListener("click", validate);

//submit function
async function validate(){
  window.alert("lancement validate");
  if (first.value.length < 2 ) {
    window.alert("first pas bon");
  }
  if (last.value.length < 2 ) {
    window.alert("last pas bon");
  }
  if (!(regexEmail.test(email.value))) {
    window.alert("email pas bon");
  }  
  if (!(regexBirthdate.test(birthdate.value))) {
    window.alert("birthdate pas bon");  
  }
  if (!(regexQuantity.test(quantity.value))) {
    window.alert("quantity pas bon");
  }
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    window.alert("location pas bon");
  }
  if (!(checkbox1.checked)) {
    window.alert("conditions pas bon");
  }
  window.alert("fin validate");
}