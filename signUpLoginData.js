// USER SIGN UP JAVASCRIPT

let newUserData = []; // New user data
let newUserEmailData = []; // New user email
let newUserPasswordData = []; // New user password
let newUserNameData = []; // New user name

const addUserData = (event) => {
    event.preventDefault(); // Stops page from reloading & losing data
    let userData = {
        id: Date.now(),
        name: document.querySelector('#nameSignUp').value,
        email: document.querySelector('#emailSignUp').value,
        password: document.querySelector('#passwordSignUp').value,
        confirmPassword: document.querySelector('#confirmPasswordSignUp').value,
    }

    if (document.querySelector('#passwordSignUp').value != document.querySelector('#confirmPasswordSignUp').value){
        alert(`Passwords must match`);
    }; // Checks if password & confirm password match

    if (document.querySelector('#passwordSignUp').value == document.querySelector('#confirmPasswordSignUp').value){
        newUserData.push(userData);
        newUserNameData.push(userData.name);
        newUserEmailData.push(userData.email);
        newUserPasswordData.push(userData.password);
        document.querySelector('form').reset(); // Clear forms for next entries
    }; // If passwords match, it will save their information

    // Save to local storage
    localStorage.setItem('newUserAccountInfo', JSON.stringify(newUserData));
    localStorage.setItem('newUserNameInfo', JSON.stringify(newUserNameData));
    localStorage.setItem('newUserEmailInfo', JSON.stringify(newUserEmailData));
    localStorage.setItem('newUserPasswordInfo', JSON.stringify(newUserPasswordData));
}


// USER LOGIN JAVASCRIPT

const loginFunc = (event) => {
    event.preventDefault(); // Stops page from reloading & losing data

    const savedEmail = localStorage.getItem('newUserEmailInfo'); // Pulls email from local storage
    const savedPassword = localStorage.getItem('newUserPasswordInfo'); // Pulls password from local storage
    const savedName = localStorage.getItem('newUserNameInfo'); // Pulls name from local storage

    let logInData = {
        email: document.querySelector('#emailLogin').value, 
        password: document.querySelector('#passwordLogin').value,
    } // Values typed in by the user

    if (logInData.email && logInData.password != savedEmail && savedPassword){
        alert(`Username or password does not match`)
    } // Check to make sure the information is in the database

    if (logInData.email && logInData.password == savedEmail && savedPassword){
        alert(`Welcome back, ${savedName}`)
    } // If matches database information, display a welcome
};

// CLICK EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#signUpButton').addEventListener('click', addUserData)
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#loginButton').addEventListener('click', loginFunc)
});