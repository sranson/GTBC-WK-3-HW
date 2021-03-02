/*

// Assignment Code
var generateBtn = document.querySelector("#generate");   

// Write password to the #password input
function writePassword() {                                
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

var password = [];



function specialCharInput() {
  var includeSpecChar = confirm("Should the password contain special characters?");
  if (includeSpecChar) {
    // code for if password needs Special Characters
    console.log("PASSWORD NEEDS SPECIAL CHARACTERS");
    password.push(includeSpecChar);
    console.log(password);
  } else {
    // code for if password does NOT need special characters


  }
}

function numberInput() {
  var includeNumber = confirm("Should the password contain numbers?");
    if (includeNumber) {
      // code for if password needs numbers
      console.log("PASSWORD NEEDS NUMBERS");
      password.push(includeNumber);
      specialCharInput();

    } else {
      // code for if password does NOT needs numbers
      specialCharInput();
    }
}

function upperCaseInput() {
  var includeUpper = confirm("Should the password contain uppercase letters?");
    if (includeUpper) {
      // code for if password needs uppercase letters
      console.log("PASSWORD NEEDS UPPERCASE LETTERS");
      password.push(includeUpper);
      numberInput();

    } else {
      // code for if password does NOT contain uppercase letters
      numberInput();
    }
}

function lowerCaseInput (includeLower) {
  var includeLower = confirm("Should the password contain lowercase letters?");
    if (includeLower) {
     // code for if password needs lowercase letters
     console.log("PASSWORD NEEDS LOWERCASE LETTERS");
     password.push(includeLower);
     upperCaseInput();

    } else {
    // code for if password does NOT contain lowercase letters

    upperCaseInput();
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
    password.push(charLength);
    lowerCaseInput();
  }
}






/*

3. Once I have the input for all variables,


3. When all prompt questions are answered, a password should be generated based on the prompt responses
5. When the password is generated, then it should be displayed in an alert OR within the box
 
*/