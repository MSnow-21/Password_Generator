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

//

// where new code starts 120620//

var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!","@","#","$","%","^","&","*","~","(",")","-","+"];
var selUpper;
var selLower;
var selNum;
var selChar;

var passwordLG = prompt("Please confirm a password length - 8 minimum to 128 maximum");

if (passwordLG < 8 ){
  alert("Please enter a password that has at least 8 characters");
}

else if (passwordLG > 128){
  alert("Please enter a password that is less than 128 characters");
}

else{
  var selUpper = confirm("Do you want capital letters?");
  var selLower = confirm("Do you want lowercase letters?");
  var selNum = confirm("Do you want numbers?");
  var selChar = confirm("Do you want special characters?");
}

if(selUpper){
  for (var i=0; i< passwordLG; i++){
    var randomNum = Math.floor((Math.random()*upCase.length));
    console.log(randomNum);
    
  }

}



// function example //
function adder(x,y,z){
  console.log(x+y+z);
}

// calls function //
adder(1,2,3);


