import React from 'react';

import '../styles/components/layout.css';

const Layout = ({ children }) => {
  return(
    <main className="container">
      { children }
    </main>
  )
}

export default Layout;
