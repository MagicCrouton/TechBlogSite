

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordRepeat = document.querySelector('#password2').value.trim();

  
    if (username && email && password && password === passwordRepeat) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
    else if (!password === passwordRepeat) {
      alert('passwords do not match')
    }
  };


  document.querySelector('#signUpSub').addEventListener('click', signupFormHandler);