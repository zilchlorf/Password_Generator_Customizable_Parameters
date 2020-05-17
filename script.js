// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbol() {
    const symbols = '&!#@$%'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

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
        PasswordCharSet += getRandomLower();
    }

    let UserChoiceUpperCase = confirm("Include uppercase letters in password?");
    console.log('User wants uppercase letters:', UserChoiceUpperCase)

    if (UserChoiceUpperCase) {
        PasswordCharSet += getRandomUpper();

    }

    let UserChoiceNumbers = confirm("Include numbers in password?");
    console.log('User wants numbers:', UserChoiceNumbers)

    if (UserChoiceNumbers) {
        PasswordCharSet += getRandomNumber();

    }

    let UserChoiceSymbols = confirm("Include symbols in password?");
    console.log('User wants symbols:', UserChoiceSymbols)

    if (UserChoiceSymbols) {
        PasswordCharSet += getRandomSymbol();


    }

    if (PasswordCharSet === "") {
        alert("Please select at least one type of character to be included in password");
    }

    for (var i = 0; i < UserPasswordLength; i++) {
        UserGeneratedPassword += PasswordCharSet.charAt(PasswordCharSet.length)
    };


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









