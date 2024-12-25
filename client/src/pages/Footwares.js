import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Kurtas = () => {
  const [kurtas, setKurtas] = useState([]); // State for Kurtas
  const navigate = useNavigate();

  // Fetch products and filter by category slug
  const fetchKurtas = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      
      // Log the entire response to check the category structure
      console.log("API Response:", data);
      
      // Filter products that belong to the 'matching-2-piece' category
      const filteredKurtas = data.products.filter((product) => {
        console.log("Product Category:", product.category);
        return product.category && product.category.slug && product.category.slug.toLowerCase() === "footware";
      });
      
      console.log("Filtered Kurtas:", filteredKurtas); // Log filtered products

      setKurtas(filteredKurtas); // Set filtered products to state
    } catch (error) {
      console.error("Error fetching Kurtas:", error);
    }
  };

  // Fetch Kurtas on component mount
  useEffect(() => {
    fetchKurtas();
  }, []);

  // Function to handle product click navigation
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Khussa </h2>
        <div className="row">
          {kurtas.length > 0 ? (
            kurtas.map((k) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={k._id}>
                <div className="card" style={{ height: "450px" }}>
                  <img
                    src={`/api/v1/product/product-photo/${k._id}`}
                    className="card-img-top"
                    alt={k.name}
                    onClick={() => handleProductClick(k.slug)}
                    style={{
                      cursor: "pointer",
                      height: "300px", // Adjusted image height for better visibility
                      objectFit: "cover", // Ensures the image fits well within the area
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{k.name}</h5>
                    <p className="card-text">PKR {k.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Khussas available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Kurtas;
