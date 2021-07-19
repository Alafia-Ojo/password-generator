//DOM elements

const resultEl =document.getElementById('result');

const lengthEl =document.getElementById('length');

const uppercaseEl =document.getElementById('uppercase');

const lowercaseEl =document.getElementById('lowercase');

const numbersEl =document.getElementById('numbers');

const symbolsEl =document.getElementById('symbols');

const generateEl =document.getElementById('generate');

const clipboardEl =document.getElementById('clipboard');




const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol
};


//generate event

 generateEl.addEventListener('click' , () => {
    const length = lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber, 
    length
    );
});

//copy password to clipboard
clipboardEl.addEventListener('click', (e) => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;
  
  if(! password) {
    return;
  }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
    
  
});


//generate password function

function generatePassword(lower, upper, numbers, symbols, length) 
{
  
  let generatedPassword = '' ;
  
  const typesCount = lower + upper + numbers + symbols;
  
  const typesArr = [{ lower }, { upper },   { numbers }, { symbols } ].filter
  (
    item => Object.values(item)[0]
    );
    
  
 
 
 if(typesCount === 0) {
   return '';
 }
   
   for(let i = 0; i < length; i += typesCount) {
     typesArr.forEach(type => {
       const funcName = Object.keys(type)[0];
       
 generatedPassword +=  randomFunc[funcName]();
       
    console.log(generatedPassword.slice(0, length));
     } );
   }
   
   
   
   const finalPassword = generatedPassword.slice(0, length);
   
   return finalPassword;
 };

  




//generator function

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '@#&?!' ;
  return symbols [Math.floor(Math.random() * symbols.length)];
}




