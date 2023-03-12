// this handles the pathing to the correct pages via server routes

const loginRedirect = (event) => {
    event.preventDefault();
    // console.log('ive been clicked')
    document.location.replace('/api/users/loginPage')
}

const signUpRedirect = (event) => {
    event.preventDefault();
    // console.log('ive been clicked')
    document.location.replace('/api/users/')
}

document.querySelector('#signInBtn').addEventListener('click', loginRedirect);
document.querySelector('#signUpBtn').addEventListener('click', signUpRedirect);