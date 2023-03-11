const { blog, user } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  await blog.findAll({
    include: [{model: user}]
  })
  .then((data) => {
    // let blogData = data
    // console.log(blogData);
    res.render('homepage', {data});
  })
  .catch((err)=> {
    res.json(err)
  })
});

module.exports = router;