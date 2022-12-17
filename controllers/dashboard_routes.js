const router = require('express').Router();
const Auth = require('../utils/auth');
const { user, post } = require('../models/');

//all post

router.get('/', Auth, async (req, res) => {
    try{
        const postData = await post.findAll({
            where:{'userId': req.session.userId},
            include: [user]
        });
        const posts = postData.map((post) => post.get({ plain: true}));
        console.log(posts);
        res.render('all-posts', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});


//new post

router.get('/new', Auth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

//click on post

router.get('/edit/:id', Auth, async (req, res) => {
    try {
        const postData = await post.findByPk(req.params.id);
        if (postData) {
            const post = postData.get({ plain: true});
            console.log(post);
            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;