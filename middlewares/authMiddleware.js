import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes (Token-based)
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Authorization token missing",
      });
    }

    // Remove "Bearer " prefix before verifying the token
    const decoded = JWT.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = decoded; // Attach the user data to the request

    next(); // Continue to the next middleware/route
  } catch (error) {
    console.error("Error in requireSignIn middleware:", error);
    res.status(401).send({
      success: false,
      message: "Invalid or expired token",
    });
  }}
// Admin Access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access: Admin privileges required",
      });
    } else {
      next();
    }
  } catch (error) {
    console.error("Error in isAdmin middleware:", error);
    res.status(500).send({
      success: false,
      message: "Error in admin middleware",
      error: error.message,
    });
  }
};
