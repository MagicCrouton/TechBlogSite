const { use } = require('../controllers/homeRoutes');
const { user } = require('../models');

const userData = [
  {
    user_name:'Hungry_Hippo',
    email: 'hungryHippo@gmail.com',
    password: '123456'
  },
  {
    user_name:'Angry_Hippo',
    email: 'angryHippo@gmail.com',
    password: '123456'
  },
  {
    user_name:'Sad_Hippo',
    email: 'SadHippo@gmail.com',
    password: '123456'
  },
  {
    user_name:'Funny_Hippo',
    email: 'funnyHippo@gmail.com',
    password: '123456'
  },
  {
    user_name:'Happy_Hippo',
    email: 'HappyHippo@gmail.com',
    password: '123456'
  },
];

const seedUsers = () => user.bulkCreate(userData);

module.exports = seedUsers;