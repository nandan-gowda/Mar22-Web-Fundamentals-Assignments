const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirm-password");
const buttonElement = document.getElementById("btn");
const nameSmall = document.getElementById("name-small");

const entireForm = document.querySelector("form");

entireForm.addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  if (nameElement.value === "") {
    console.log("This Field is mandatory");
    nameElement.classList = "error";
    nameSmall.classList = "display";
  } else {
    nameElement.classList = "success";
    nameSmall.classList = "hidden";

  }
  
  if (emailElement.value === "") {
    console.log("This Field is mandatory");
    emailElement.classList = "error";
    // nameSmall.classList = "display";
  } else {
    emailElement.classList = "success";
  }
  if (passwordElement.value === "" || passwordElement.value.includes('@')===false && passwordElement.value.includes( '#')===false && passwordElement.value.includes('$')===false) {
    console.log("This Field is mandatory");
    passwordElement.classList = "error";
    // nameSmall.classList = "display";
  } else {
    passwordElement.classList = "success";
  }
  if (confirmPasswordElement.value === "" ||  confirmPasswordElement.value != passwordElement.value  ) {
    console.log("This Field is mandatory");
    confirmPasswordElement.classList = "error";
    // nameSmall.classList = "display";
  } else {
    confirmPasswordElement.classList = "success";
  }
}
