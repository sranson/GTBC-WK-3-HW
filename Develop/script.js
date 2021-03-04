


var passwordCriteria = [];          // Example: passwordCriteria = [10, true, false, true, true];

var password = [];



var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!", "#", "$", "%"];


// CALL FUNCTIONS TO ADD CHARACTERS TO PASSWORD ARRAY IF TRUE
function generatePassword() {
  for (i=0; i < passwordCriteria[0]; i++) {
    if (password.length < passwordCriteria[0] && passwordCriteria[1]) {addLetter()};
    if (password.length < passwordCriteria[0] && passwordCriteria[2]) {addLetter()};
    if (password.length < passwordCriteria[0] && passwordCriteria[3]) {addNum()};
    if (password.length < passwordCriteria[0] && passwordCriteria[4]) {addSpec()};
  }
  displayPassword();
}


// RANDOM NUMBER GENERATOR
function getRandomLetter() {
  randomNum = Math.floor(Math.random() * letters.length + 1);
  randomLetter = (letters[randomNum]);
  return randomLetter;
}

function addLetter() {
  var random = getRandomLetter();
  //console.log(random);
  if (passwordCriteria[1]) {
    password.push(random);
  }
  if (passwordCriteria[2]) {
    password.push(random.toLowerCase());
  }
}


function addNum() {
  var random = (Math.floor(Math.random() * numbers.length));              
  num = (numbers[random]);                                             
  password.push(num);   

}

function addSpec() {
  var random = (Math.floor(Math.random() * specialChars.length));              
  spec = (specialChars[random]);                                       
  password.push(spec); 
}
  

// GET BOOLEAN INPUT
function upperCaseInput() {
  var includeUpper = confirm("Should the password contain uppercase letters?");
    if (includeUpper) {
      passwordCriteria.push(includeUpper);
      lowerCaseInput();
    } else {
      passwordCriteria.push(false);
      lowerCaseInput();
    }
}

function lowerCaseInput () {
  var includeLower = confirm("Should the password contain lowercase letters?");
    if (includeLower) {
     passwordCriteria.push(includeLower);
     numberInput();
    } else {
    passwordCriteria.push(false);  
    numberInput();
    }
}

function numberInput() {
  var includeNumber = confirm("Should the password contain numbers?");
    if (includeNumber) {
      passwordCriteria.push(includeNumber);
      specialCharInput();
    } else {
      passwordCriteria.push(false);
      specialCharInput();
    }
}

function specialCharInput() {
  var includeSpecChar = confirm("Should the password contain special characters?");
  if (includeSpecChar) {
    passwordCriteria.push(includeSpecChar);
    generatePassword();
  } else {
    passwordCriteria.push(false);
    generatePassword();
  }
}


// BUTTON CLICK FUNCTION
function startPasswordPrompt() {
  document.querySelector(".btn");
  var charLength = prompt("How many characters long should this password be?");
  charLength = parseInt(charLength);   
  if (charLength < 8) {
    alert("The password must be at least 8 characters");
    startPasswordPrompt();
  } else if (charLength > 128) {
    alert("The password can not exceed 128 characters");
    startPasswordPrompt();
  } else {
    passwordCriteria.push(charLength);
    upperCaseInput();
  }
}


// SHOW PASSWORD ON HTML PAGE
function displayPassword() {
 var passwordString = password.toString().replace(/,/g,"").trim();
    document.addEventListener("click", function() {
      document.getElementById("showPassword").innerHTML = passwordString;
    })
}


/*
1. Refactor code
*/