const express = require("express");
const router = express.Router();
const {addUser,login, sendfeedback}= require('../controllers/userController')
router.post('/addUser', addUser)
router.post('/login', login)
router.post('/sendfeedback', sendfeedback)
module.exports = router;