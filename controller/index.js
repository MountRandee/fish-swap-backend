var 
  express = require('express'),
  router = express.Router(),
  cors = require('cors');

router.all('*', cors());
router.use('/fish', require('./fish'));
router.use('/country', require('./country'));
router.use('/buyer', require('./buyer'));
router.use('/seller', require('./seller'));
router.use('/transaction', require('./transaction'));
router.use('/prices', require('./prices'));
router.use('/login', require('./login'));

module.exports = router