import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/ProductController.ts";
// import various fetching function

// new instance of express router, to handle specific routes and their own function
const router = express.Router();

// GET route for get all products data
router.get("/products", getProducts);
// GET route for getting specific product by id
router.get("/products/:id", getProductById);
// POST route for adding product to the db
router.post("/products", createProduct);
// PATCH route for updating specific product by id
router.patch("/products/:id", updateProduct);
// DELETE route for deleting product by id
router.delete("/products/:id", deleteProduct);

export default router;
