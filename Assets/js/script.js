// Assignment Code
var generateBtn = document.querySelector("#generate");
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special_array = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //blank character type array before user adds their preferances
  var password_characteristics = [];
  //blank string so that when we add a character to it, it wont have undefined initially
  var password = "";

  var password_length = window.prompt("Choose the length of the password \n Enter a number between 8 and 128 :");
  //test to see if the length required for the password is
  //1. a number
  //2. has at least 8 characters
  //3. has less than 128 characters
  if (Number.isInteger(+password_length) && password_length >= 8 && password_length <= 128) {
    //this is all the prompts asking for character types
    //if the user selects "ok" then add the type to an array to record their choice
    var include_lowercase = window.confirm("Include lower case characters :");
    if (include_lowercase) {
      password_characteristics.push("lowercase");
    }
    var include_uppercase = window.confirm("Include upper case characters :");
    if (include_uppercase) {
      password_characteristics.push("uppercase");
    }
    var include_numeric = window.confirm("Include numeric characters :");
    if (include_numeric) {
      password_characteristics.push("numeric");
    }
    var include_special_char = window.confirm("Include special characters :");
    if (include_special_char) {
      password_characteristics.push("special");
    }
  } else if (password_length == null) {
    //if the user cancels the prompt to choose length or doesn't enter anything
    //return null so that placeholder in html is displayed
    return null;
  } else {
    window.alert("You have not entered a valid number for the password length: \nYou entered: " + password_length);
    //tells the user that they have not entered a valid input for char length and shows them their answer
    //return null so that placeholder in html is displayed
    return null;
  }

  //when the user selects a char type to add it adds it to an array. 
  //if the array size is 0, then no types were added by the user
  if (password_characteristics.length == 0) {
    //tell the user that they had to add at least one char type
    window.alert("You must select at least one character type to include for password generation:");
    //return null so that placeholder in html is displayed
    return null;
  }
  //generating password using user gather requirements
  for (var i = 0; i < password_length; i++) {
    var special_index = Math.floor(Math.random() * password_characteristics.length);
    //randomly select what character type from the types picked by the user

    //using that random value select the char type from the array
    switch (password_characteristics[special_index]) {
      case "lowercase":
        //find a random number in the alphabet
        var alphabet_index = Math.floor(Math.random() * alphabet.length);
        //use that index to add the letter to the password
        password = password + alphabet[alphabet_index];
        break;
      case "uppercase":
        //same as lower case, except convert that char to uppercase then add it
        var alphabet_index = Math.floor(Math.random() * alphabet.length);
        password = password + alphabet[alphabet_index].toUpperCase();
        break;
      case "numeric":
        //find a random number from 0-9
        password = password + Math.floor(Math.random() * 10);
        break;
      case "special":
        //find a random special char from the array
        var special_char_index = Math.floor(Math.random() * special_array.length);
        password = password + special_array[special_char_index];
    }
  }
  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
