import express from "express";
const router = express.Router();
import { getProducts, getProductsById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, createProduct);
router.route('/:id').get(getProductsById).put(protect,updateProduct).delete(protect, deleteProduct );

export default router;
