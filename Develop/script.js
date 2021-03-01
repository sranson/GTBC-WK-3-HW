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



function startPasswordPrompt() {
  document.querySelector(".btn")
  console.log ("The button was CLICKED!")     //This works
}


/*

1. When the button is clicked, ask for the length of the password.
    -- TO DO:  --
    1. Add a button click event listener to the red button
    2. When clicked, a prompt should come up that says: "How many characters long should this password be?"
    3. Store the input in a variable called "charLength"
***** NOTE: Password must be between 8 and 128 characters

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