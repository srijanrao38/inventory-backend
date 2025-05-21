const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restockProduct,
} = require("../contollers/productController");

router.post("/", auth, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);
router.put("/restock/:id", auth, restockProduct);

module.exports = router;