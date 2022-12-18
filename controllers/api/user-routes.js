const router = require('express').Router();

// const e = require('express');
const { user } = require('../../models');

//signup

router.post('/', async (req, res) => {
    try {
        const NewUser = await user.create({
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

//login
router.post('/login', async (req, res) => {
    try {
        const user = await user.findOne({
            where: {
                username: req.body.username, 
            },
        });

        if (!user) {
            res.status(400).json({ message: 'No Account Found!' });
            return;
        }

        const VPassword = user.checkPassword(req.body.password);

        if (!VPassword) {
            res.status(400).json({ message: "No Account Found!" });
        
        return;
    }
    req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;

        res.json({ user, message: 'You Are Logged In!' });
    });
} catch (err) {
    res.status(400).json({ message: 'No Account Found!'});
}
});

//logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => { res.status(204).end();});
    }else {
        res.status(404).end();
    }
});

module.exports = router;