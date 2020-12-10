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

// Adding function call - password variable called out on function write password //

function generatePassword(){

  // Arrays for for-loops //
  
  var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var specChar = ["!","@","#","$","%","^","&","*","~","(",")","-","+"];
  
  // variables for prompts //
  
  var upperSelected;
  var lowerSelected;
  var numberSelected;
  var characterSelected;
  
  // Output arrays for each if statement //
  
  var characterUpdate = [];

  // Output of array for characterUpdate using original password length //
  // This is required otherwise all "true" selected variables show password length qty //

  var combinedPassword = [];
  
  // Prompt message asking for a password length. Description of how many numbers allowed in message. //
  
  var passwordLG = prompt("Please confirm a password length - 8 minimum to 128 maximum"); 
  
  // If statement 
  
  if (passwordLG < 8 ){
    alert("Please enter a password that has at least 8 characters");
  }
  
  else if (passwordLG > 128){
    alert("Please enter a password that is less than 128 characters");
  }
  
  else{
    var upperSelected = confirm("Do you want capital letters?");
    var lowerSelected = confirm("Do you want lowercase letters?");
    var numberSelected = confirm("Do you want numbers?");
    var characterSelected = confirm("Do you want special characters?");
  }
    
  // UpperCase Letters in characterUpdate Array 
  
  if(upperSelected){ 
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*upCase.length);
      var upperLetters = upCase[calcNum];
      characterUpdate.push(upperLetters);
      console.log(upperLetters);
    }
  }
  
  // Lowercase letters in characterUpdate Array 
  
  if(lowerSelected){ 
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*lowCase.length);
      var lowerLetters = lowCase[calcNum];
      characterUpdate.push(lowerLetters);
      console.log(lowerLetters);
    }
  }

  // Numbers into characterUpdate Array

  if(numberSelected){ 
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*numbers.length);
      var numberValues = numbers[calcNum];
      characterUpdate.push(numberValues);
      console.log(numberValues);
    }
  }

  // Characters into characterUpdate Array

  if(characterSelected){
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*specChar.length);
      var characterValues = specChar[calcNum];
      characterUpdate.push(characterValues);
      console.log(characterValues);
    }
  }

  // In this for loop, the combined password from all the "true" selected promps is ... //
  // reentered utilizing defined password length. It outputs to the combinedPassword array //

  for (var k=0; k < passwordLG; k++){
    var calcNum = Math.floor(Math.random()*characterUpdate.length);
    var finalCharacterValues = characterUpdate[calcNum];
    combinedPassword.push(finalCharacterValues);
    console.log(finalCharacterValues);
    
  }  

  // Extra array required to combine all "True" selected values into same password length requirement //
  // combinedPassword array is returned with join method. The join method takes the array items and puts ... //
  // ... into a usable string to print //

  // returning combinedPassword variable array into for function.
  // Note - required '' in join method to remove all ","
  
  return combinedPassword.join('');

}
  