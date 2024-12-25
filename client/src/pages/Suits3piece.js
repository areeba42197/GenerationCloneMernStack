import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Kurtas = () => {
  const [kurtas, setKurtas] = useState([]); // State for Kurtas
  const navigate = useNavigate();

  const fetchKurtas = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      
      // Log the entire response to check the category structure
      console.log("API Response:", data);
      
      // Ensure the category slug is being checked properly (log category slugs)
      const filteredKurtas = data.products.filter((product) => {
        console.log("Product Category:", product.category);
        return product.category && product.category.slug && product.category.slug.toLowerCase() === "matching-3-piece";
      });
      
      console.log("Filtered Kurtas:", filteredKurtas); // Log filtered products

      setKurtas(filteredKurtas);
    } catch (error) {
      console.error("Error fetching Kurtas:", error);
    }
  };

  useEffect(() => {
    fetchKurtas();
  }, []);

  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Suits 3 piece</h2>
        <div className="row">
          {kurtas.length > 0 ? (
            kurtas.map((k) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={k._id}>
                <div className="card h-100">
                  <img
                    src={`/api/v1/product/product-photo/${k._id}`}
                    className="card-img-top"
                    alt={k.name}
                    onClick={() => handleProductClick(k.slug)}
                    style={{ cursor: "pointer", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{k.name}</h5>
                    <p className="card-text">PKR {k.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Suits available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Kurtas;
