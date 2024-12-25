import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newin = () => {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const navigate = useNavigate();

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product"); // Adjust endpoint if needed
      setProducts(data.products || []); // Update state with fetched products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle product image click
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">New In</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((p) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={p._id}
                style={{ paddingLeft: "15px", paddingRight: "15px" }}  // To control spacing between columns
              >
                <div className="card" style={{ height: "450px", width: "100%" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    onClick={() => handleProductClick(p.slug)}
                    style={{
                      cursor: "pointer",
                      height: "300px", // Increased image height
                      objectFit: "cover", // Ensures the image fills the space
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">PKR {p.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Newin;
