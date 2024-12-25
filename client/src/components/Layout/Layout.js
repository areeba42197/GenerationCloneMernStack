import React from 'react';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        {children}
        <ToastContainer />
      </main>
      
    </div>
  );
};

export default Layout;
