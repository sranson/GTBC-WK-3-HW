

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



var passwordCriteria = [];          // Example: passwordCriteria = [10, true, false, true, true];

var password = [];


// Step 1: Make arrays for letters, numbers, and special characters
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChars = ["!", "#", "$", "%"];



function generatePassword() {

  
    if (passwordCriteria[1] === true) {
        var random = (Math.floor(Math.random() * uppercaseLetters.length));     // select a random position from the 'uppercaseLetters' array 
        ucl = (uppercaseLetters[random]);                                       // ucl is a randim uppercase letter
        password.push(ucl);                                                     //push 'ucl' into the 'password' array
      
    } if (passwordCriteria[2] === true) {
        var random = (Math.floor(Math.random() * lowercaseLetters.length));      
        lcl = (lowercaseLetters[random]);                                       
        password.push(lcl);                                                       

    } if (passwordCriteria[3] === true) {
        var random = (Math.floor(Math.random() * numbers.length));              
        ranNum = (numbers[random]);                                             
        password.push(ranNum);   
                                                
    } if (passwordCriteria[4] === true) {
        var random = (Math.floor(Math.random() * specialChars.length));              
        ranSpecChar = (specialChars[random]);                                       
        password.push(ranSpecChar);                                      
        console.log(password);  
    } else {
        return;
    }
  }
  

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
    passwordCriteria.push(false);
    generatePassword();
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
      passwordCriteria.push(false);
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
      passwordCriteria.push(false);
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
    passwordCriteria.push(false);  
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