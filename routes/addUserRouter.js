const express = require('express');
const router = express.Router();
const addUserController = require('../controllers/addUserController')

router.get('/', addUserController.addUserGet);
router.post('/', addUserController.addUserPost);

module.exports = router;