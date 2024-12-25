import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from 'react-router-dom';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/Form/SerachInput";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
 

  //getAllProducts
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        console.error("Expected an array of products but got", data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"All products"}>
      <hr style={{ backgroundColor: "black", marginBottom: "0%" }} />

      
      <Carousel />
      <Categories /><br></br>

      <TrendingProducts products={products} />
      <br></br>
      <Banner />
      <br></br>
      <TrendingProducts products={products} />
      <br></br>
      <Banner2 />
      <br></br>
      <TrendingProducts products={products} />
      <br>
      </br>
      <Tiktok/>
      <All products={products}/>
    </Layout>
  );
};



const searchStyle = {
  color: "rgb(136, 135, 135)",
  fontSize: "13px",
  paddingLeft: "12px",
  textDecoration: "none",
};

const Carousel = () => (
  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active position-relative">
        <img
          src="/images/website_banner_9c62e225-6991-4283-871d-a2c202884648_1400x.jpg"
          className="d-block w-100"
          alt="carousel image 1"
        />
        <div className="carousel-button-container">
          <NavLink to={"/newin"}><button className="carousel-btn">SHOP NOW</button></NavLink>
        </div>
      </div>
      <div className="carousel-item position-relative">
        <img
          src="/images/1_desktop_website_banner_1400x.webp"
          className="d-block w-100"
          alt="carousel image 2"
        />
        <div className="carousel-button-container">
        <NavLink to={"/newin"}><button className="carousel-btn">SHOP NOW</button></NavLink>
        </div>
      </div>
    </div>
  </div>
);


const Banner = () => (
  <div className="banner-container">
    <img
      src="/images/bannersz_1400x.jpg"
      className="banner-img"
      alt="banner image"
    />
    <NavLink to={"/newin"}><button className="shopbutton">SHOP NOW</button></NavLink>
  </div>
);

const Banner2 = () => (
  <div className="banner-container">
    <img
      src="/images/Group_1_de437f35-ee7b-4d30-81e3-354a12872b40_1400x.jpg"
      className="banner-img"
      alt="banner image"
    />
    <NavLink to={"/newin"}><button className="shopbutton">SHOP NOW</button></NavLink>
  </div>
);





const Categories = () => (
  <div className="categoryContainer">
    <div class="container">
      <h2 class="subsection1">SHOP BY CATEGORY</h2>
    </div>
    <br></br>

    {/* Category Table */}
    <table className="category-table">
      <tbody>
        <tr>
          <td rowSpan="2">
            <NavLink to="/matching2piece">
              <img src="/images/759x1108-2_pc.webp" alt="Matching 2 PC" />
            </NavLink>
            <div className="text-overlay">
              <b>MATCHING 2 PC</b>
            </div>
          </td>
          <td>
            <NavLink to="/kurtas">
              <img
                src="/images/02_fa848126-11d8-4745-818d-35baa1437cf6.jpg"
                alt="Kurta"
              />
            </NavLink>
            <div className="text-overlay">
              <b>KURTA</b>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <NavLink to="/formals">
              <img
                src="/images/03_8582a5b3-9c8e-4e16-9d4f-e9507e004157.jpg"
                alt="Tops"
              />
            </NavLink>
            <div className="text-overlay">
              <b>TOPS</b>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <NavLink to="/suits3piece">
              <img
                src="/images/04_ba74d796-7677-4cf5-9680-922ad443e4bd.jpg"
                alt="Bottoms"
              />
            </NavLink>
            <div className="text-overlay">
              <b>BOTTOMS</b>
            </div>
          </td>
          <td rowSpan="2">
            <NavLink to="/suits3piece">
              <img
                src="/images/06_e030ce6e-c168-4498-8716-761a4c9831ec.jpg"
                alt="Suits 3 Piece"
              />
            </NavLink>
            <div className="text-overlay">
              <b>SUITS 3 PIECE</b>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <NavLink to="/formals">
              <img
                src="/images/05_43f3513a-0a39-4c85-8ad8-7abb20c119a0.jpg"
                alt="Dupattas"
              />
            </NavLink>
            <div className="text-overlay">
              <b>DUPATTAS</b>
            </div>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" colSpan="2">
            <NavLink to="/formals">
              <img
                src="/images/Banner-under-tile.jpg"
                alt="Formals"
                className="noresize"
              />
            </NavLink>
            <div className="text-overlay">
              <b>FORMALS</b>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const TrendingProducts = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4; // Number of products to show at once
  const navigate = useNavigate(); // Use navigate hook

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (currentIndex < products.length - productsPerPage) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };

  // Function to handle the "Previous" button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };

  // Function to handle product image click
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`); // Navigate to product details page using slug
  };

  return (
    <div className="container">
      <h2 className="subsection2">TRENDING NOW</h2>

      {/* Product Navigation Buttons */}
      <div
        className="carousel-buttons"
        style={{
          marginTop: '10px',
          justifyContent: 'space-between',
          bottom: '-10px',
          left: '20px',
          right: '20px',
        }}
      >
        <button className="pre-btn" onClick={handlePrev}>
          <img src="/images/arrow.png" alt="Previous" />
        </button>
        <button className="nxt-btn" onClick={handleNext}>
          <img src="/images/arrow.png" alt="Next" />
        </button>
      </div>

      {/* Product Cards Container */}
      <div className="d-flex flex-wrap">
        {Array.isArray(products) && products.length > 0 ? (
          products
            .slice(currentIndex, currentIndex + productsPerPage)
            .map((product) => (
              <div
                className="card m-2"
                style={{ width: "14rem" }}
                key={product._id}
              >
                {/* Image click will navigate to product details */}
                <img
                  src={`/api/v1/product/product-photo/${product._id}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "400px", objectFit: "cover" ,cursor: 'pointer' // Pointer cursor on hover
                  }}
                  onClick={() => handleProductClick(product.slug)} // Add click handler
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">PKR {product.price}</p>
                </div>
              </div>
            ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

const BudgetBuys = () => (
  <div className="container">
    <h2 className="subsection2">BUDGET BUYS</h2>
    {/* Your budget buys structure */}
  </div>
);



const Tiktok = () => (
  <div className="container">
    <h2 className="subsection3">#TIKTOK</h2>
    <br />
    <br />
    <div className="tiktok">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@generation_pk/video/7387307205843766546"
        data-video-id="7387307205843766546"
        data-theme="light"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="@generation_pk"
            href="https://www.tiktok.com/@generation_pk?refer=embed"
          >
            @generation_pk
          </a>{" "}
          <p>Annual Summer Sale 2024!</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="♬ original sound  - GENERATION"
            href="https://www.tiktok.com/music/original-sound-GENERATION-7387307280675146497?refer=embed"
          >
            ♬ original sound - GENERATION
          </a>
        </section>
      </blockquote>

      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@generation_pk/video/7367320350914317574"
        data-video-id="7367320350914317574"
        data-theme="light"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="@generation_pk"
            href="https://www.tiktok.com/@generation_pk?refer=embed"
          >
            @generation_pk
          </a>{" "}
          <p>
            Its our Birthday Bash! Anniversary SALE NOW LIVE with FLAT 30% &#38;
            50% OFF on select items.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="♬ original sound  - GENERATION"
            href="https://www.tiktok.com/music/original-sound-GENERATION-7367325902998784774?refer=embed"
          >
            ♬ original sound - GENERATION
          </a>
        </section>
      </blockquote>

      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@generation_pk/video/7373535974065753350"
        data-video-id="7373535974065753350"
        data-theme="light"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="@generation_pk"
            href="https://www.tiktok.com/@generation_pk?refer=embed"
          >
            @generation_pk
          </a>{" "}
          Daily fit checks with @Rozkayy{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="♬ оригинальный звук - dina | influencer"
            href="https://www.tiktok.com/music/оригинальный-звук-7310895051956472577?refer=embed"
          >
            ♬ оригинальный звук - dina | influencer
          </a>
        </section>
      </blockquote>

      {/* TikTok Embed Script */}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
    <br />
    <br />
  </div>
);


const All = ({ products }) => {
  const navigate = useNavigate();

  // Function to handle product image click
  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`); // Navigate to product description page
  };

  return (
    <div className="contt">
      <div className="d-flex flex-wrap">
        {products?.map((p) => (
          <div className="cont1" key={p._id}>
            <img
              src={`/api/v1/product/product-photo/${p._id}`}
              alt={p.name}
              onClick={() => handleProductClick(p.slug)} // Navigate to product description on click
              style={{ cursor: "pointer" }} // Optional: Add pointer cursor for better UX
            />
            <p className="text1">{p.name}</p>
            <p className="price">PKR. {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
