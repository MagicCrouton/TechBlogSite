const seedUsers = require('./userSeed');
const seedBlogs = require('./blogSeed');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DB SYNCED -----\n');
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');
  await seedBlogs();
  console.log('\n----- Blogs SEEDED -----\n');
  process.exit(0);
};

seedAll();