const router = require('express').Router();
const { json } = require('express');
const session = require('express-session');
const { user, blog, comment } = require('../../models');

router.get('/byTitle/:id', async (req, res) => {
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

// routes to create and edit blogs

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


router.get('/editBlog/:id', async (req, res) => {
    let blog_id = JSON.parse(req.params.id);
    if (req.session.loggedIn) {
    await blog.findOne({
        where: {blog_id: `${blog_id}`},
        include: [{model: user}]
    })
    .then((data) => {
        res.render('blogEdit', {
            data,
            loggedIn: req.session.loggedIn,
            userName: req.session.loggedIn
        })
    })
    .catch((err)=>{
        res.json(err)
    })}
    else {
        res.render('login')
    }
    });

router.put('/editBlog', async (req, res) => {
    blog.update(
        {
          blog_title: req.body.blog_title,
          blog_body: req.body.blog_body
        },
        {
          where: {
            blog_id: req.body.blog_id,
          },
        }
      )
        .then((update) => {
          res.json(update);
        })
        .catch((err) => res.json(err));
        });

router.delete('/deleteBlog', async (req, res) => {
    blog.destroy({
        where: {
            blog_id: req.body.blog_id
        }
    })
    .then((update)=> {
        res.json(update);
    })
    .catch((err) => {
        res.json(err)
    })
})

// routes to edit comments



router.get('/editComment/:id', async (req, res) => {
    let comment_id = req.params.id
    if (req.session.loggedIn) {
    await comment.findOne({
        where: {comment_id: `${comment_id}`},
        include: [{model: blog}]
    })
    .then((data) => {
        console.log(data)
        res.render('commentEdit', {
            data,
            loggedIn: req.session.loggedIn,
            userName: req.session.loggedIn
        })
    })
    .catch((err)=>{
        res.json(err)
    })}
    else {
        res.render('login')
    }
    });

router.put('/editComment', async (req, res) => {
        comment.update(
            {
              comment_body: req.body.comment_body
            },
            {
              where: {
                comment_id: req.body.comment_id,
              },
            }
          )
            .then((update) => {
              res.json(update);
            })
            .catch((err) => res.json(err));
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

router.delete('/deleteComment', async (req, res) => {
        comment.destroy({
            where: {
                comment_id: req.body.comment_id
            }
        })
        .then((update)=> {
            res.json(update);
        })
        .catch((err) => {
            res.json(err)
        })
    })

module.exports= router