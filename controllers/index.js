const router = require('express').Router();

const APIRoutes = require('./api');
const HOMERoutes = require('./home_routes');
const DASHRoutes = require('./dashboard_routes');

router.use('/', HOMERoutes);
router.use('/dashboard', DASHRoutes);
router.use('/api', APIRoutes);


module.exports = router;