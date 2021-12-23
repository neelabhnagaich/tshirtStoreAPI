const express = require('express')
const { home } = require('../controller/homeController')
const router = express.Router()



router.route('/').get(home)
router.route('/dummy').get(home)


module.exports = router;