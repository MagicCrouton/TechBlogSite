
const commentHandler = async (event) => {
    event.preventDefault();
    console.log(event.target)
    let blog_id = event.target.dataset.blogid
    let comment_body = document.querySelector(`#textArea${blog_id}`).value
    
    await fetch('/api/post/newComment', {
        method: 'POST',
        body: JSON.stringify({ comment_body, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => response.json())
      .then((data)=>{
        window.location.reload()
      })
}

let homePageCommentSave = document.querySelectorAll('.commentBtn');

homePageCommentSave.forEach((element) => {
    element.addEventListener('click', commentHandler)
})