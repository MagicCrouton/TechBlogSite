async function postNewBlog(event) {
    event.preventDefault();
    let blog_title = document.getElementById('newBlogTitle').value;
    let blog_body = document.getElementById('newBlogBody').value;
    console.log(blog_body);
    console.log(blog_title);
    await fetch('/api/post/newBlog', {
        method: 'POST',
        body: JSON.stringify({ blog_title, blog_body }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(() => {
            document.location.replace('/api/users/dashboard');
        });
}


document.querySelector('#postNew').addEventListener('click', postNewBlog);