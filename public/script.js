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

function commentButtonEventPlacer(id) {
  
  document.getElementById(`${id}`).addEventListener("click", async (event) => {
    event.preventDefault();

    let user_id = session.user.user_id;
    let blog_id = await fetch('/api/')
    await fetch('/api/post/newComment', {
      method: 'POST',
      body: JSON.stringify({ user_id, blog_id, comment_body }),
      headers: { 'Content-Type': 'application/json' },
    })
  })  
}


document.querySelector('#signInBtn').addEventListener('click', loginRedirect);
document.querySelector('#signUpBtn').addEventListener('click', signUpRedirect);