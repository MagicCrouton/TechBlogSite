const router = require('express').Router();
const { user, blog, comment } = require('../../models');

router.get('/comment', async (req, res) => {
await comment.findAll({
    include: [{model: blog},{model: user}]
})
.then((data) => {
    res.json(data)
})
.catch((err)=>{
    res.json(err)
})
});

router.get('/byTitle/:id', async (req, res) => {
    // put session check in here to redirect to login
    let blog_title = JSON.parse(req.params.id);
    await blog.findOne({
        where: {blog_title: `${blog_title}`}
    })
    .then((data) => {
        // console.log(data)
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
});

router.post('/newComment', async (req, res) => {
    // put session check in here to redirect to login in the homepage handlebars
    console.log(req.body)
    await comment.create({
        user_id: req.session.user.user_id,
        blog_id: req.body.blog_id,
        comment_body: req.body.comment_body
    })
    .then((data)=> {
        res.json(data)
    })
    .catch((err)=> {
        res.json(err)
    })
    });

router.post('/newBlog', async (req, res) => {
    await blog.create({
        user_id: req.session.user.user_id,
        blog_title: req.body.blog_title,
        blog_body: req.body.blog_body
    })
    .then(()=> {
        res.render('dashboard', {
            loggedIn: res.session.loggedIn,
            userName: res.session.user
        })
    })
    .catch((err)=> {
        res.json(err)
    })
    });



module.exports= router