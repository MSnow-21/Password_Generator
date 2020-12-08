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

// This is where the new code starts 120620 //

// Adding function call - password variable called out on function write password //

function generatePassword(){

  // Arrays for for-loops //
  
  var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var specChar = ["!","@","#","$","%","^","&","*","~","(",")","-","+"];
  
  // Concatonated Arrays for testing //
  // Commenting out until usage //
  
  // Upper combinations //

  // var upandlowCase = upCase.concat(lowCase);
  // var upandnumbers = upCase.concat(numbers);
  //var upandspecChar = upCase.concat(specChar);
  // var uplownumber = upCase.concat(lowCase, numbers);
  //var uplownumberspec = upCase.concat(lowCase, numbers, specChar);
  
  //Lower combinations //
  
  // var lowandnumbers = lowCase.concat(numbers);
  // var lowandspecChars = lowCase.concat(specChar);
  // var lownumberspec = lowCase.concat(numbers, specChar);

  //Special Character combinations //
  
  // var numbersandspecChar = numbers.concat(specChar);
  
  // variables for prompts //
  
  var upperSelected;
  var lowerSelected;
  var numberSelected;
  var characterSelected;
  
  // Output arrays for each if statements //
  
  var characterUpdate = []
  
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
    
  // UpperCase Letters in characterUpdate Array //
  
  if(upperSelected){ // push all the UpperCase Letters into an array.
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*upCase.length);
      var upperLetters = upCase[calcNum];
      characterUpdate.push(upperLetters);
      console.log(upperLetters);
    }
  }
  
  // Testing lowercase letters in characterUpdate Array //

  if(lowerSelected){ // push all the Lowercase letters into an array.
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*lowCase.length);
      var lowerLetters = lowCase[calcNum];
      characterUpdate.push(lowerLetters);
      console.log(lowerLetters);
    }
  }

  if(numberSelected){ // push all numbers into an array //
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*numbers.length)
      var numberValues = numbers[calcNum];
      characterUpdate.push(numberValues);
      console.log(numberValues);
    }
  }

  if(characterSelected){
    for (var k=0; k < passwordLG; k++){
      var calcNum = Math.floor(Math.random()*specChar.length)
      var characterValues = specChar[calcNum];
      characterUpdate.push(characterValues);
      console.log(characterValues);
    }
  }


  // return all values added in the character update array //
  // Currently testing array output //
  // results of array output show quantity of each selected value in each if statement //
  
  return characterUpdate.join();

}
  