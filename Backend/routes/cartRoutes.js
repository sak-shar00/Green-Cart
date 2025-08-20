const express = require('express');
const authUser = require("../middlewares/authUser"); // ✅ correct import
const { updateCart } = require("../controllers/cartController"); // ✅ correct import

const router = express.Router();

router.post("/update", authUser, updateCart); // ✅ both should be valid functions

module.exports = router;
