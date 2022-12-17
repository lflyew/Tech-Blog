const router = require('express').Router();


const USERRoutes = require('./user-routes');
const POSTRoutes = require('./post-routes');
const COMMENTRoutes = require('./comment-routes');

router.use('/user', USERRoutes);

router.use('/post', POSTRoutes);

router.use('/comment', COMMENTRoutes);



module.exports = router;
