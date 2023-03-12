const router = require('express').Router();
const { user, blog, comment } = require('../../models');

// router.get('/', async (req, res) => {
//     await blog.findAll({
//         include: [{model: comment}]
//     })
// })
// .then((data) => {

// })

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