const router = require('express').Router();
const apiRoutes = require('./api');

// Homepage route
router.get('/', (req, res) => {
  res.send('Use /api to access the API routes.');
});

// API routes
router.use('/api', apiRoutes);

module.exports = router;
