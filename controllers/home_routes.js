const router = require('express').Router();
const Auth = require('../utils/auth');
const { user, comment, post } = require('../models/');

//get post

router.get('/', async (req, res) => {
    try {

        const postData = await post.findAll({
            include: [user], });

        const posts= postData.map((post) => post.get({ plain: true}));
        res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
        });

// single post

        router.get('/post/:id', Auth, async (req, res) => {
            try {
                const postData = await post.findOne({
                    where: {id: req.params.id},
                    include: [ user, {
                        model: comment,
                        include: [user],

                    },],
                });
                if (postData) {
                    const post = postData.get({plain: true});
                    console.log(post);
                    res.render('single-post', { post, loggedIn: req.session.loggedIn});
                } else {
                    res.status(404).end();
                }
            } catch (err) {
                res.status(500).json(err);
            }
        });

        //signup and login routes

        router.get('/login', (req, res) => {
            if (req.session.loggedIn) {
                res.redirect('/dashboard');
                return;
            }
            res.render('login');
        });
        router.get('/signup', (req, res) => {
            if (req.session.loggedIn) {
                res.redirect('/dashboard');
                return;
            }
            res.render('signup');
        });

        module.exports = router;
    