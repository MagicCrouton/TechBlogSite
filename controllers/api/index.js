const router = require('express').Router();
const userRoutes = require('./users');
const postRoutes = require('./post');

router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;