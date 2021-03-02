

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


function upperCaseInput () {
  var includeUpper = confirm("Should the password contain uppercase letters?");
    if (includeUpper) {
      // code for if password needs uppercase letters
      console.log("PASSWORD NEEDS UPPERCASE LETTERS");


    } else {
      // code for if password does NOT contain uppercase letters
    }
}


//function that will return booleans for (4) character types
function lowerCaseInput (includeLower) {
  var includeLower = confirm("Should the password contain lowercase letters?");
    if (includeLower) {
     // code for if password needs lowercase letters
     console.log("PASSWORD NEEDS LOWERCASE LETTERS");
     upperCaseInput();
    } else {
    // code for if password does NOT contain lowercase letters

    upperCaseInput();
    }
}


// Function that returns the character length of the password
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
    lowerCaseInput();
  }
}







/*

2. Once the user provides the "charLength" input, ask the user:
    1. Should this password contain lowercase letters?            var includeLowercase;
    2. Should this password contain uppercase letters?            var includeUppercase;
    3. Should this password contain numbers?                      var includeNumber;
    4. Should this password contain special characters?           var includeSpecialChar;
    -- TO DO: --
    1. Store each of the above responses in a boolean type variable

3. Once I have the input for all variables,


3. When all prompt questions are answered, a password should be generated based on the prompt responses
5. When the password is generated, then it should be displayed in an alert OR within the box
 
*/