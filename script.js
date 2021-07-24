// Assignment Code
const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890";
  let specChar = "!@#$%^&*~()-+";

  // Checking typeof
  
  console.log(typeof(upperCaseLetters));
  console.log(typeof(lowCase));

  //Changing uppercaseletters string into an array //

  upperCaseArray = upperCaseLetters.split("");
  console.log(upperCaseArray);
  console.log(typeof(upperCaseArray))

  //Changing lowercaseletters string into an array //
  lowerCaseArray = lowerCaseLetters.split("");

  //Changing numbers string into an array //
  numbersArray = numbers.split("");

  //Changing special character string into an array //
  specialCharArray = specChar.split("");
 
  let upperSelected;
  let lowerSelected;
  let numberSelected;
  let characterSelected;
  
  // Output arrays for each if statement //
  
  let characterUpdate = [];

  // Output of array for characterUpdate using original password length //
  // This is required otherwise all "true" selected variables show password length qty //

  let combinedPassword = [];
  
  // Prompt message asking for a password length. Description of how many numbers allowed in message. //
  
  let passwordLG = prompt("Please confirm a password length - 8 minimum to 128 maximum"); 
  
  // If statement 
  
  if (passwordLG < 8 ){
    alert("Please enter a password that has at least 8 characters");
  } else if (passwordLG > 128) {
    alert("Please enter a password that is less than 128 characters");
  } else {
    upperSelected = confirm("Do you want capital letters?");
    lowerSelected = confirm("Do you want lowercase letters?");
    numberSelected = confirm("Do you want numbers?");
    characterSelected = confirm("Do you want special characters?");
  }
    
  // UpperCase Letters in characterUpdate Array 
  
  if(upperSelected){ 
    for (let i=0; i < passwordLG; i++){
      let calcNum = Math.floor(Math.random()*upperCaseArray.length);
      console.log(calcNum);
      let upperLetters = upperCaseArray[calcNum];
      characterUpdate.push(upperLetters);

    }
  }
  
  // Lowercase letters in characterUpdate Array 
  
  if(lowerSelected){ 
    for (let i=0; i < passwordLG; i++){
      let calcNum = Math.floor(Math.random()*lowerCaseArray.length);
      console.log(calcNum)
      let lowerLetters = lowerCaseArray[calcNum];
      console.log(lowerLetters)
      characterUpdate.push(lowerLetters);
      console.log(lowerLetters);
    }
  }

  // Numbers into characterUpdate Array

  if(numberSelected){ 
    for (let i=0; i < passwordLG; i++){
      let calcNum = Math.floor(Math.random()*numbersArray.length);
      let numberValues = numbersArray[calcNum];
      characterUpdate.push(numberValues);
      console.log(numberValues);
    }
  }

  // Characters into characterUpdate Array

  if(characterSelected){
    for (let i=0; i < passwordLG; i++){
      let calcNum = Math.floor(Math.random()*specialCharArray.length);
      let characterValues = specialCharArray[calcNum];
      characterUpdate.push(characterValues);
      console.log(characterValues);
    }
  }

  // In this for loop, the combined password from all the "true" selected promps is ... //
  // reentered utilizing defined password length. It outputs to the combinedPassword array //

  for (let i=0; i < passwordLG; i++){
    let calcNum = Math.floor(Math.random()*characterUpdate.length);
    let finalCharacterValues = characterUpdate[calcNum];
    combinedPassword.push(finalCharacterValues);
    console.log(finalCharacterValues);
    
  }  

  // Extra array required to combine all "True" selected values into same password length requirement //
  // combinedPassword array is returned with join method. The join method takes the array items and puts ... //
  // ... into a usable string to print //

  // returning combinedPassword variable array into for function.
  // Note - required '' in join method to remove all ","
  
  return combinedPassword.join("");

}
  