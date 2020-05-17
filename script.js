var generateBtn = document.querySelector("#generate");
var passwordTextarea = document.querySelector("#password");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&()*+/:;<=>?@^_{}~";

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    let UserGeneratedPassword = "";
    let PasswordCharSet = "";
    let UserPasswordLength = prompt("Please enter desired length of password (between 8 and 128 characters)")

    console.log('User entered:', UserPasswordLength, 'as password character length')

    if (Number(UserPasswordLength < 8) | Number(UserPasswordLength > 128) | isNaN(UserPasswordLength)) {
        alert("Password length must be a number between 8 and 128");
        return;
    }

    let UserChoiceLowerCase = confirm("Include lowercase letters in password?");
    console.log('User wants lowercase letters:', UserChoiceLowerCase)

    if (UserChoiceLowerCase) {
        PasswordCharSet += lowercaseCharacters;
    }

    let UserChoiceUpperCase = confirm("Include uppercase letters in password?");
    console.log('User wants uppercase letters:', UserChoiceUpperCase)

    if (UserChoiceUpperCase) {
        PasswordCharSet += uppercaseCharacters;

    }

    let UserChoiceNumbers = confirm("Include numbers in password?");
    console.log('User wants numbers:', UserChoiceNumbers)

    if (UserChoiceNumbers) {
        PasswordCharSet += numericalCharacters;

    }

    let UserChoiceSymbols = confirm("Include symbols in password?");
    console.log('User wants symbols:', UserChoiceSymbols)

    if (UserChoiceSymbols) {
        PasswordCharSet += specialCharacters;


    }

    if (PasswordCharSet === "") {
        alert("Please select at least one type of character to be included in password");
    }
    for (var i = 0; i < UserPasswordLength; i++) {
        UserGeneratedPassword += PasswordCharSet.charAt(Math.floor(Math.random() * PasswordCharSet.length));
    };
    localStorage.setItem("password", UserGeneratedPassword);
    let UserGeneratedPasswordStr = localStorage.getItem("password");
    passwordTextarea.textContent = UserGeneratedPasswordStr;

}











