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

comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

comment.belongsTo(blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

blog.hasMany(comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

// i'm not sure if this will work
comment.belongsTo(comment, {
    foreignKey: 'parentComment_id',
    onDelete: 'CASCADE'
})


module.exports = {
    user,
    blog,
    comment
}