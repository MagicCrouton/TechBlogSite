const { blog, user, comment } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  await blog.findAll({
    order: [['blog_id', 'DESC']],
    include: [
      {model: user},
      {model: comment, include: [{model: user}]}
    ]
  })
  .then((data) => {
    // console.log(req.session.loggedIn)
    // res.json(data)
    res.render('homepage', {
      data,
      loggedIn: req.session.loggedIn,
    });
  })
  .catch((err)=> {
    res.json(err)
  })
});


module.exports = router;
