// Elements 
const password = document.querySelector('#password');
const button = document.querySelector('button');

// Password data 

let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+{}:"<>:?';
let passwordLength = 128;
let passwordValue = '';

// Creat Password 

// += means that it will keep adding on another value from the index. for example if the first index is 1 that will equal 1 from the characters and the plus will make sure
//that the loop concats the next value until we reach 8 which is the password length

//substring returns part of the string between the start and end indexes

const createPassword = () => {
    passwordValue = '';

    for (let i = 0; i < passwordLength; i++) {
     let number = Math.floor(Math.random() * characters.length);    
     passwordValue += characters.substring(number, number + 1);
    }
 
    password.value = passwordValue;
}

// Events

button.addEventListener ('click', createPassword);