import React from 'react'
import Layout from '../components/Layout/Layout'
import './Privacy.css'

const Policies = () => {
  return (
    <Layout>
     <div className="privacy-policy">
      <br></br>
      <h1>Privacy Policy</h1>
      <br></br>
      <p>
        We may collect two types of information via this website: information you specifically provide to us, and automatic information associated with your use of this site. Information you specifically provide to us includes any information you enter into a form or send to us via e-mail e.g. when placing an order or setting up an account. Automatic information associated with your use of this site includes any information arising from your use of this site which you do not specifically provide e.g. your IP address, the type of web browser you are using, and the speed of your web connection.
      </p>
      <p>
        We take your privacy seriously and will take all measures to protect your personal information. Any personal information received will only be used to fill your order. We will not sell or redistribute your information to anyone.
      </p>
    </div>
    </Layout>
  )
}

export default Policies


