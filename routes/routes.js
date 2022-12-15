const express = require("express");
const router = express.Router();
const {addUser,login, sendfeedback, getfeedback}= require('../controllers/userController')
router.post('/addUser', addUser)
router.post('/login', login)
router.post('/sendfeedback', sendfeedback)
router.get("/getfeedback/:doctorName", getfeedback);
module.exports = router;