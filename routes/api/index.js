const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.get('/', (req, res) => {
    res.send('You are at /api. Use /api/users or /api/thoughts to access the API routes.');
});
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
