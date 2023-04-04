var generateBtn = document.querySelector("#generate");
var length = 8;
var lowercaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characters = [" ",";","!","@","#","$","%","&","'","(",")","*","+","=",",","-",".","/",":","<",">","?","[","]","{","}","^","_",",","|","`","~"];

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  prompt("password?")

}
function generatePassword() {

}
function passlength() {
  length = parseInt(prompt("How long do you want your password to be? 8 to 128 characters"))

  if(!length===number || length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters and the answer must be in number form.")
    return false;
  }
}
