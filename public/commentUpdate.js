const commentUpdateHandler = async (event) => {
    event.preventDefault();
    let comment_id = event.target.dataset.commentid;
    let comment_body = document.querySelector(`#comment${comment_id}`).value
    console.log(comment_id)
    await fetch('/api/post/editComment', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            comment_id, 
            comment_body 
        })
      })
      .then((response) => response.json())
      .then(()=>{
        window.location.href = '/api/users/dashboard'
      })
}

const commentDeleteHandler = async (event) => {
    event.preventDefault();
    let comment_id = event.target.dataset.commentid;
    console.log(comment_id)
    await fetch('/api/post/deleteComment', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            comment_id
        })
      })
      .then((response) => response.json())
      .then((data)=>{
        window.location.href = '/api/users/dashboard'
      })
}

let editSubmit = document.querySelector('#commentUpdateBtn')
let deleteSubmit = document.querySelector('#commentDeleteBtn')

editSubmit.addEventListener('click', commentUpdateHandler);
deleteSubmit.addEventListener('click', commentDeleteHandler);