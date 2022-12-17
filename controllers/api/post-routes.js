const router = require('express').Router();
const Auth = require('../../utils/auth');
const { post } = require('../../models/');

//create post

router.post('/', Auth, async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const NewPost = await post.create({ ...body, userId: req.session.userId });
        console.log("This is the New Post: ", NewPost);
        res.json(NewPost);
    } catch (err) {
        console.log('Failed!', err);
        res.status(500).json(err);
    }
});