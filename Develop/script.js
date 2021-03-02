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

var passwordCriteria = [];          // Example: passwordCriteria = [10, true, false, true, true];

var password = " ";


// Step 1: Make arrays for letters, numbers, and special characters
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!", "#", "$", "%"];


// Step 2: Create a function that takes in boolans as the input

function generatePassword() {
    if (passwordCriteria[1] == true) {
        // select a random position from the 'uppercaseLetters' array 
        var random = (Math.floor(Math.random() * uppercaseLetters.length));
        ucl = (uppercaseLetters[random]);
        //push the random letter into the 'password' string
        password += ucl;
        console.log(password);
    } if (passwordCriteria[2] == true) {
        //console.log("I am ALSO adding lowercase letter to the final password");
    } if (passwordCriteria[3] == true) {
      //console.log("I am EVEN adding some numbers in there");
    } if (passwordCriteria[4] == true) {
      //console.log("Add a special character too!");
    }
  }






// Step 3: Based on the "true" values, push attributes from the corresponding arrays into a "password" array using a for loop 




function specialCharInput() {
  var includeSpecChar = confirm("Should the password contain special characters?");
  if (includeSpecChar) {
    // code for if password needs Special Characters
    console.log("PASSWORD NEEDS SPECIAL CHARACTERS");
    passwordCriteria.push(includeSpecChar);
    console.log(passwordCriteria);
    generatePassword();
  } else {
    // code for if password does NOT need special characters


  }
}

function numberInput() {
  var includeNumber = confirm("Should the password contain numbers?");
    if (includeNumber) {
      // code for if password needs numbers
      console.log("PASSWORD NEEDS NUMBERS");
      passwordCriteria.push(includeNumber);
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
      passwordCriteria.push(includeUpper);
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
     passwordCriteria.push(includeLower);
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
    passwordCriteria.push(charLength);
    lowerCaseInput();
  }
}






/*

1. When all prompt questions are answered, a password should be generated based on the prompt responses
2. When the password is generated, then it should be displayed in an alert OR within the box
 
*/