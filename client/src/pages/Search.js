import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigate = (slug) => {
    navigate(`/product/${slug}`); // Use navigate function for redirection
  };

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={p._id}
                onClick={() => handleNavigate(p.slug)} // Navigate on image click
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ cursor: "pointer" }} // Make the image clickable
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                   
                  </p>
                  <p className="card-text">PKR {p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
