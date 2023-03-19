
const blogUpdateHandler = async (event) => {
    event.preventDefault();
    // console.log(event.target.dataset.blogid)
    let blog_id = event.target.dataset.blogid;
    let blog_title = document.querySelector(`#title${blog_id}`).value
    let blog_body = document.querySelector(`#body${blog_id}`).value
    await fetch('/api/post/editBlog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            blog_id, 
            blog_title, 
            blog_body 
        })
      })
      .then((response) => response.json())
      .then((data)=>{
        console.log(data)
        location.reload()
      })
}

let editSubmit = document.querySelector('#blogUpdateBtn')

editSubmit.addEventListener('click', blogUpdateHandler);
