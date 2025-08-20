const express = require("express");
const {
  addProduct,
  productList,
  productById,
  changeStock,
} = require("../controllers/productController"); // ✅ correct path and names

const upload = require("../config/multer"); // ✅ no destructuring
const authSeller = require("../middlewares/authSeller");

const router = express.Router();

// ✅ Make sure 'images' is a string
router.post("/add", authSeller, upload.array("images"), addProduct);
router.get("/list", productList);
router.post("/id", productById);
router.post("/instock", authSeller, changeStock);

module.exports = router;
