//WEBDEV1 by SALWa

// BTN EVENTLISTENER
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let user1 = document.getElementById("user").value;
  let pass1 = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass2").value;
  let isCorrect = false;
  // user must be between 4-8 characters
  if (user1.length === 0) {
    document.getElementById(
      "login"
    ).innerHTML = `<p class="output">Required Field</p>`;
    document.getElementById("user").style.border = "2px solid red";
  } else if (user1.length < 4 || user1.length > 8) {
    document.getElementById(
      "login"
    ).innerHTML = `<p class="output"> Must be between 4 and 8 characters 
    </p>`;
    document.getElementById("user").style.border = "2px solid red";
  } else {
    document.getElementById("login").innerHTML = `<p class="output"> User valid
    </p>`;
    isCorrect = true;
    document.getElementById("user").style.border = "2px solid green";
  }

  // Check Password 1
  if (pass1.length === 0) {
    document.getElementById(
      "login2"
    ).innerHTML = `<p class="output2">Required Field</p>`;
    document.getElementById("pass").style.border = "2px solid red";
  } else {
    document.getElementById(
      "login2"
    ).innerHTML = `<p class="output2"> Password valid</p>`;
    document.getElementById("pass").style.border = "2px solid green";
    isCorrect = true;
  }

  // Check Password 2
  if (pass2.length === 0) {
    document.getElementById(
      "login3"
    ).innerHTML = `<p class="output3">Required Field</p>`;
    document.getElementById("pass2").style.border = "2px solid red";
  } else if (pass1 != pass2) {
    document.getElementById(
      "login3"
    ).innerHTML = `<p class="output3"> Passwords do not match </p>`;
    document.getElementById("pass2").style.border = "2px solid red";
  } else {
    document.getElementById(
      "login3"
    ).innerHTML = `<p class="output3"> Password valid</p>`;

    document.getElementById("pass2").style.border = "2px solid green";
    isCorrect = true;
  }

  // Is the form valid?
  if (isCorrect === true) {
    document.getElementById(
      "output4"
    ).innerHTML = `<p class="out4"> SIGNUP SUCCESSFUL!</p>`;
    document.getElementById("output4").style.color = "green";
  }
}
