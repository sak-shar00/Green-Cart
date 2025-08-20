const express = require('express');
const { isSellerAuth,sellerLogin,logoutSeller} = require('../controllers/sellerController');
const authSeller=require('../middlewares/authSeller.js')
const router = express.Router();
router.post('/login', sellerLogin);
router.get('/is-auth',authSeller,isSellerAuth);
router.get('/logout',authSeller,logoutSeller);

module.exports = router;
