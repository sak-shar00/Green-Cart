const express = require("express");
const authUser = require("../middlewares/authUser");
const {placeOrderCOD, getUserOrders,getAllOrders ,placeOrderStripe} = require("../controllers/orderController");
const authSeller = require('../middlewares/authSeller.js');
const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.get("/user", authUser, getUserOrders);
router.get("/seller", authUser, getAllOrders);
router.post("/stripe", authUser, placeOrderStripe);

module.exports = router;