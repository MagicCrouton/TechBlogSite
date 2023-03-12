const user = require('./user');
const blog = require('./blog');
const comment = require('./comment')

// module.exports = {user};
// module.exports = {blog};

blog.belongsTo(user, {
    foreignKey: 'user_id'
})

user.hasMany(blog, {
    foreignKey: 'user_id'
})

user.hasMany(comment, {
    foreignKey: 'user_id'
})

comment.belongsTo(blog, {
    foreignKey: 'blog_id'
})

blog.hasMany(comment, {
    foreignKey: 'blog_id'
})

module.exports = {
    user,
    blog,
    comment
}