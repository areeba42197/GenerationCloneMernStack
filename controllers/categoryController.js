import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";  // Import slugify

// Create category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).send({ message: 'Name is required' });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: 'Category Already Exists',
      });
    }

    // Create a new category and save it
    const category = await new categoryModel({
      name,
      slug: slugify(name), // Ensure slugify is working properly
    }).save();

    // Send success response
    res.status(201).send({
      success: true,
      message: "New category created",
      category, // Include the created category in the response
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category creation",
    });
  }
};

// Update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body; // Extract name from request body
    const { id } = req.params; // Extract id from request params

    const category = await categoryModel.findByIdAndUpdate(
      id,
      { 
        name, 
        slug: slugify(name), // Update both name and slug
      },
      { new: true } // Return the updated document
    );

    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      category, // Include the updated category in the response
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};


//getAll Category
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All categories list",
      category, // Include the fetched categories in the response
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while fetching categories",
    });
  }
};

//Single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Get Single category successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while fetching category",
    });
  }
};


//Delete category
export const deleteCategory = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id); // Use req.params.id
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting category",
    });
  }
};
