const { use } = require('../controllers/homeRoutes');
const { blog } = require('../models');

const blogData = [
  {
    user_id:'1',
    blog_title: 'hungryHippo blog 1',
    blog_body: 'hungry hippo ate something large'
  },
  {
    user_id:'2',
    blog_title: 'angryHippo blog 1',
    blog_body: 'angry hippo smash'
  },
  {
    user_id:'3',
    blog_title: 'SadHippo blog 1',
    blog_body: 'sad hippo cry'
  },
  {
    user_id:'4',
    blog_title: 'funny blog 1',
    blog_body: 'funny hippo made a joke'
  },
  {
    user_id:'5',
    blog_title: 'HappyHippo blog 1',
    blog_body: 'happy hippo lived'
  },
  {
    user_id:'5',
    blog_title: 'HappyHippo blog 2',
    blog_body: 'happy hippo loved'
  },
  {
    user_id:'5',
    blog_title: 'HappyHippo blog 2',
    blog_body: 'happy hippo laughed'
  }
];

const seedBlogs = () => blog.bulkCreate(blogData);

module.exports = seedBlogs;