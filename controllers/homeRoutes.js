const { blog, user } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  await blog.findAll({
    order: [['blog_id', 'DESC']],
    include: [{model: user}]
  })
  .then((data) => {
    // let blogData = data
    // console.log(data)
    res.render('homepage', {
      data, 
      loggedIn: req.session.loggedIn,
      userName: req.session.user
    });
  })
  .catch((err)=> {
    res.json(err)
  })
});


module.exports = router;