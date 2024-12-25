import React from 'react'
import Layout from '../components/Layout/Layout'
import './Privacy.css'

const Customer = () => {
  return (
    <Layout>

    <div className="privacy-policy"> {/* Reusing the same class for styling */}
      <h1>Customer Care</h1>
      <p>
        At GENERATION, we prioritize our customers and are here to assist with any inquiries or issues you may have. Whether it's about an order, product details, or returns, our dedicated team is ready to help.
      </p>
      <p>
        Feel free to contact us via email or our helpline for prompt assistance. Your satisfaction is our priority!
      </p>
    </div>
 

    </Layout>
  )
}

export default Customer
