var generateBtn = document.querySelector("#generate");
var finalpassword = [];
var length = 8;
var lowercaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characters = [" ",";","!","@","#","$","%","&","'","(",")","*","+","=",",","-",".","/",":","<",">","?","[","]","{","}","^","_",",","|","`","~"];

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var fpass = pass(); 
    var passwordText = document.querySelector("#password");

    if (fpass) {
        var fpassword = generatePassword();
        passwordText.value = fpassword;
    } else {
        passwordText.value = "";
    }
}
function generatePassword() {
    var password = "";
    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * finalpassword.length)
        password = password + finalpassword[random];
    }
    return password;
}
function pass() {
  length = parseInt(prompt("How long do you want your password to be? 8 to 128 characters"))

  if(isNaN(length) || length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters and the answer must be in number form.");
    return false;
  }

  if (confirm("Does your Password need lowercase letters")) {
    finalpassword = finalpassword.concat(lowercaseletters);
  } else {
    lowercaseletters = "";
  }

  if(confirm("Does your Password need Uppercase letters?")) {
    finalpassword = finalpassword.concat(uppercaseletters);
  } else {
    uppercaseletters = "";
  }
  if(confirm("Does your Password need numbers?")) {
    finalpassword = finalpassword.concat(numbers);
  } else {
    numbers = "";
  }
  if(confirm("Does your Password need special characters?")) {
    finalpassword = finalpassword.concat(characters);  
  } else {
    characters = "";
  }
  if(finalpassword == false) {
    alert("Please choose at least one style of character!")
    return false
  }
  return true;
}


