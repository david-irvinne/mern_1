import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

// use patch if u only updating some field on a resource
// use put if u updating all/every field on a resource
router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct);


export default router;