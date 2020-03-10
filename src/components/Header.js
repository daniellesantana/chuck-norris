import React from 'react';
import '../styles/components/header.css'

const Header = ({ children }) => {
  return(
    <header className="header">
      <h1 className="title">Chuck Norris Jokes</h1>
      { children }
    </header>
  )
}

export default Header;
