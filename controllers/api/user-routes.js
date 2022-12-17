const router = require('express').Router();

const { user } = require('../../models');

//signup

router.post('/', async (req, res) => {
    try {
        const NewUser = await.user.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.userId = NewUser, id;
            req.session.username = NewUser.username;
            req.session.loggedIn = true;
            res.json(NewUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});