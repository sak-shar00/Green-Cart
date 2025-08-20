const express = require('express');
const { register,login,isAuth,logout} = require('../controllers/userController');
const authUser=require('../middlewares/authUser.js')
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/is-auth',authUser,isAuth);
router.get('/logout',authUser,logout);

// router.get('/:id', getUser); // Optional route to get user profile

module.exports = router;
