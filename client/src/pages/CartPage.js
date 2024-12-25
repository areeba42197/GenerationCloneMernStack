import React from "react";
import Layout from "./../components/Layout/Layout";

const CartPage = () => {

  

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">Cart</h1>
            <h4 className="text-center">Your Products</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
