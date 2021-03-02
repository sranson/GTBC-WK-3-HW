

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



var passwordCriteria = [];          // Example: passwordCriteria = [10, true, false, true, true];

var password = [];




var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!", "#", "$", "%"];


function generatePassword() {
  for (i=0; i < passwordCriteria[0]; i++) {
    if (password.length < passwordCriteria[0] && upperCaseInput) {addUpper()};
    if (password.length < passwordCriteria[0] && lowerCaseInput) {addlower()};
    if (password.length < passwordCriteria[0] && numberInput) {addNum()};
    if (password.length < passwordCriteria[0] && specialCharInput) {addSpec()};
  }
  console.log(passwordCriteria[0]);
  console.log(password);
  console.log(password.length);
  var passwordString = password.toString().replace(/,/g,"").trim();
  console.log(passwordString);
  displayPassword();
}


function addUpper(){
  var random = (Math.floor(Math.random() * uppercaseLetters.length));     // select a random position from the 'uppercaseLetters' array 
  upper = (uppercaseLetters[random]);                                       // upper is a random uppercase letter
  password.push(upper);                                                     //push 'ucl' into the 'password' array
}

function addlower() {
  var random = (Math.floor(Math.random() * lowercaseLetters.length));      
  lower = (lowercaseLetters[random]);                                       
  password.push(lower);  

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
  




function upperCaseInput() {
  var includeUpper = confirm("Should the password contain uppercase letters?");
    if (includeUpper) {
      console.log("upperCaseInput " + includeUpper);
      passwordCriteria.push(includeUpper);
      lowerCaseInput();
    } else {
      console.log("upperCaseInput " + includeUpper);
      passwordCriteria.push(false);
      lowerCaseInput();
    }
}

function lowerCaseInput () {
  var includeLower = confirm("Should the password contain lowercase letters?");
    if (includeLower) {
    console.log("lowerCaseInput " + includeLower);
     passwordCriteria.push(includeLower);
     numberInput();

    } else {
    // code for if password does NOT contain lowercase letters
    passwordCriteria.push(false);  
    console.log("lowerCaseInput " + includeLower);
    numberInput();
    }
}

function numberInput() {
  var includeNumber = confirm("Should the password contain numbers?");
    if (includeNumber) {
      console.log("numberInput " + includeNumber);
      passwordCriteria.push(includeNumber);
      specialCharInput();

    } else {
      // code for if password does NOT needs numbers
      passwordCriteria.push(false);
      console.log("numberInput " + includeNumber);
      specialCharInput();
    }
}

function specialCharInput() {
  var includeSpecChar = confirm("Should the password contain special characters?");
  if (includeSpecChar) {
    // code for if password needs Special Characters
    console.log("includeSpecChar " + includeSpecChar);
    passwordCriteria.push(includeSpecChar);
    console.log(passwordCriteria);
    generatePassword();
  } else {
    // code for if password does NOT need special characters
    passwordCriteria.push(false);
    console.log("includeSpecChar " + includeSpecChar);
    generatePassword();
  }
}






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




function displayPassword() {
  console.log(password);
}



/*

1. Make the password array into a string
2. Display the password string on the html page
3. Refactor code
 
*/