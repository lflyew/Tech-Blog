const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home_routes');
const dashboardRoutes = require('./dashboard_routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);



module.exports = router;