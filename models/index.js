const user = require('./user');
const comment = require('./comment');
const post = require('./post');

user.hasMany(post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

user.hasMany(comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

post.belongsTo(user, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

post.hasMany(comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});
comment.belongsTo(user, {
    foreignKey: 'userId',
});
comment.belongsTo(post, {
    foreignKey: 'postId'
});

module.exports = {
    user,
    comment,
    post
};