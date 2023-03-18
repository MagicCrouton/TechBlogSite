
const commentHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.id)
    let blog_id;
    let comment_body;
    let blog_title = JSON.stringify(event.target.id);
    await fetch(`/api/post/byTitle/${blog_title}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => response.json())
      .then((data) => {
        blog_id = data.blog_id
        comment_body = document.querySelector(`#textArea${blog_id}`).value
        console.log(blog_id, comment_body)
      })
    
    await fetch('/api/post/newComment', {
        method: 'POST',
        body: JSON.stringify({ comment_body, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => response.json())
      .then((data)=>{
        console.log(data)
      })
}

let homePageCommentSave = document.querySelectorAll('.commentBtn');

homePageCommentSave.forEach((element) => {
    element.addEventListener('click', commentHandler)
})