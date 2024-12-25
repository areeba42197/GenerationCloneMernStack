import fs from "fs";
import slugify from "slugify";
import productModel from "../models/productModel.js"; // Relative path to the models folder

// Create Product
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;

    // Validation
    switch(true){
    case !name:
     return res.status(500).send({ error: "Product name is required" })
    case !description:
      return res.status(500).send({ error: "Product description is required" })
    case !price:
        return res.status(500).send({ error: "Product price is required" })
    case !category:
        return res.status(500).send({ error: "Product category is required" })
    case !quantity:
        return res.status(500).send({ error: "Product quantity is required" })
    case photo && photo.size > 1000000:
        return res.status(500).send({ error: "Product photo is required" })
    }

    // Create new product
    const products = new productModel({ ...req.fields, slug:slugify(name) });

    // Handle photo upload
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    // Save product
    await products.save()

    res.status(200).send({
      success: true,
      message: "Product created successfully",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error creating product",
    });
  }
};

// Get All Products
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .select("-photo")
      .populate("category")
      .limit(100)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      countTotal: products.length,
      message: "All products retrieved successfully",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error fetching products",
    });
  }
};

// Get Single Product
export const singleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single product retrieved successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error fetching single product",
    });
  }
};

// Get Product Photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (!product || !product.photo || !product.photo.data) {
      return res.status(404).json({
        success: false,
        message: "Photo not found",
      });
    }

    res.set("Content-Type", product.photo.contentType);
    return res.status(200).send(product.photo.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error fetching photo",
    });
  }
};

// Update Product
export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } = req.fields;
    const { photo } = req.files;

    // Validation
    if (!name) return res.status(400).json({ success: false, error: "Product name is required" });
    if (!description) return res.status(400).json({ success: false, error: "Product description is required" });
    if (!price) return res.status(400).json({ success: false, error: "Product price is required" });
    if (!category) return res.status(400).json({ success: false, error: "Product category is required" });
    if (!quantity) return res.status(400).json({ success: false, error: "Product quantity is required" });
    if (photo && photo.size > 1000000) return res.status(400).json({ success: false, error: "Photo size should be less than 1MB" });

    // Update product
    const product = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Handle photo upload
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    // Save updated product
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error updating product",
    });
  }
};

// Delete product
export const deleteProductController = async (req, res) => {
  try {
    // Fetching the product to delete
    const product = await productModel.findByIdAndDelete(req.params.pid);

    // If product does not exist
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Sending success response
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error deleting product",
    });
  }
};

//
export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const results = await productModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
      .select("-photo");
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Product API",
      error,
    });
  }
};
