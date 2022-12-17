const router = require('express').Router();
const Auth = require('../../utils/auth');
const { comment } = require('../../models/');


//get comment
router.get('/', Auth, async (req, res) => {
    try{
        const CommentData = await comment.findAll({
            include: [user],
        });

        const comments = CommentData.map((comment) => comment.get({ plain: true}));
        console.log(comments);

        res.render('single-post', { comments, loggedIn: req.session.loggedIn});

    } catch (err) {
        res.status(500).json(err);
    }
});

//post comment

router.post('/', Auth, async (req, res) => {
    const body = req.body;
    try{
        const NewComment = await comment.create({
            ...body,
            userId: req.session.userId,
        });
        res.json(NewComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

