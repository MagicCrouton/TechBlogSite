const user = require('./user');
const blog = require('./blog');

// module.exports = {user};
// module.exports = {blog};

blog.belongsTo(user, {
    foreignKey: 'user_id'
})

user.hasMany(blog, {
    foreignKey: 'user_id'
})

module.exports = {
    user,
    blog
}