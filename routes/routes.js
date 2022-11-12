const express = require("express");
const router = express.Router();
const {addUser,login}= require('../controllers/userController')
router.post('/addUser', addUser)
router.post('/login', login)
module.exports = router;