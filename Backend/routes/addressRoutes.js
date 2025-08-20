const express = require("express");
const { addAddress, getAddress } = require("../controllers/addressController");
const authUser = require("../middlewares/authUser.js");

const router = express.Router();

router.post("/add", authUser, addAddress);
router.get("/get", authUser, getAddress);

module.exports = router;
