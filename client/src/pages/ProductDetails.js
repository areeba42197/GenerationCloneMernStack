import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-toastify"; // Importing toast for notifications
import "./ProductDetails.css"; // Import custom CSS for styling

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state
  const [cart, setCart] = useCart([]); // Cart state

  // Fetch product details based on slug
  useEffect(() => {
    if (params?.slug) {
      console.log("Fetching product with slug:", params.slug); // Log the slug
      getProduct();
    }
  }, [params?.slug]);

  // Get Product details
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/single-product/${params.slug}`);
      console.log("Fetched product data:", data); // Log the fetched product data
      if (data?.product) {
        setProduct(data.product);
      } else {
        setError("Product not found"); // Set error if no product is found
      }
    } catch (error) {
      console.log("Error fetching product:", error); // Log the error
      setError("Failed to fetch product details");
    } finally {
      setLoading(false);
    }
  };

  // Update localStorage when the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    }
  }, [cart]);

  return (
    <Layout>
      <div className="container mt-5">
        {loading && <p className="text-center">Loading product details...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && product && (
          <div className="row">
            <div className="col-md-6">
              {/* Display product image */}
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                className="card-img-top product-image"
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <h1 className="product-title">{product.name}</h1>
              <h5 className="product-price">PKR {product.price}</h5>
              <h6 className="product-category">{product?.category?.name}</h6>

              {/* Product description with proper formatting */}
              <div className="product-description">
                <h6 className="description-heading">Description:</h6>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>

              {/* Button to add to cart with custom styling */}
              <button
                className="btn add-to-cart-btn mt-3"
                onClick={() => {
                  setCart([...cart, product]); // Add product to cart
                  toast.success("Item added to cart successfully!"); // Show success toast
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
