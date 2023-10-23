import React from 'react';
import './header.css';

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <p>{title}</p>
    </header>
  );
};

export default Header;