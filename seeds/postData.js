const { post } = require('../models');

const postData = [
    {
        'postTitle': "Ways To Reduce Stress",
        "postContent": "Meditating atleast 15 mins a day will help with reducing stress! ",
        'userId': 1
    },
    {
        'postTitle': "COVID",
        "postContent": "Be sure to get your COVID Vaccine! ",
        'userId': 2
    },
    {
        'postTitle': "Travel-Tips",
        "postContent": "Try to book flights atleast a month in advance for best prices! ",
        'userId': 3
    }
];
const SeedPost = () => post.bulkCreate(postData);
module.exports = SeedPost;
