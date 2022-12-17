const router = require('express').Router();
const Auth = require('../../utils/auth');
const { post } = require('../../models/');
const e = require('express');

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

//update post

router.put('/:id', Auth, async (req, res) => {
    try{
        console.log('Here is req.body', req.body);
        const [affectRows] = await post.update(req.body, {
            where: { id: req.params.id,},
        });
        if (affectRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

//delete

router.delete('/:id', Auth, async (req, res) => {
    try {
        const [affectRows] = post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (affectRows > 0) {
            res.status(200).end();

        }else {
            res.status(404).end();
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;