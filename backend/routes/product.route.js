import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/product.controller.js";

router.post("/", uploadFile("thumbnail"), createProduct);
router.put("/:id", uploadFile("thumbnail"), updateProduct);
router.get("/:id", getProductById);
router.get("/", getAllProduct);
router.delete("/:id", deleteProduct);

export default router;
