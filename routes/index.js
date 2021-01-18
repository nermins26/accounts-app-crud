const express = require('express');
const router = express.Router();

router.use('/', require('./pages'))
router.use('/save_account', require('./save'))
router.use('/delete', require('./delete'))
router.use('/update_account', require('./update'))

module.exports = router