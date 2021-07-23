// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Adding function call - password variable called out on function write password //

function generatePassword(){

  // Arrays for for-loops //
  
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let numbers = [1,2,3,4,5,6,7,8,9,0];
  let specChar = ["!","@","#","$","%","^","&","*","~","(",")","-","+"];
  
  console.log(typeof(upperCaseLetters));
  console.log(typeof(lowCase));  

  upperCaseArray = upperCaseLetters.split("");
  console.log(upperCaseArray);
  console.log(typeof(upperCaseArray))
 
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
  }
  
  else if (passwordLG > 128){
    alert("Please enter a password that is less than 128 characters");
  }
  
  else{
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
      let calcNum = Math.floor(Math.random()*lowCase.length);
      let lowerLetters = lowCase[calcNum];
      characterUpdate.push(lowerLetters);
      console.log(lowerLetters);
    }
  }

  // Numbers into characterUpdate Array

  if(numberSelected){ 
    for (let i=0; i < passwordLG; i++){
      let calcNum = Math.floor(Math.random()*numbers.length);
      let numberValues = numbers[calcNum];
      characterUpdate.push(numberValues);
      console.log(numberValues);
    }
  }

  // Characters into characterUpdate Array

  if(characterSelected){
    for (let k=0; k < passwordLG; k++){
      let calcNum = Math.floor(Math.random()*specChar.length);
      let characterValues = specChar[calcNum];
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
  