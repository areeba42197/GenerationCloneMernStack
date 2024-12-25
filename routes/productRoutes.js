import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController,  deleteProductController, getProductController, productPhotoController, searchProductController, singleProductController, updateProductController } from "../controllers/productController.js";
import  formidable from 'express-formidable';


const router = express.Router();

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController);

//get all
router.get('/get-product',getProductController)

//single category
router.get("/single-product/:slug", singleProductController);

//delete category
router.delete("/delete-product/:id", requireSignIn, isAdmin, deleteProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//update 
router.put("/update-product/:id", requireSignIn, isAdmin, updateProductController);

//search product
router.get("/search/:keyword", searchProductController);

export  default router

