import React from 'react';
import './sideBar.css';
import Menu from '../Menu/Menu';
import getId from '../../helpers';

const SideBar = (props) => {
  const menuItems = [
    {text: 'main', url: 'http://localhost:3000/'},
    {text: 'github', url: 'http://github.com/'},
    {text: 'chsbc', url: 'http://csbc.edu.ua/'},
  ]
  return (
    <div className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu list={menuItems} style={"incolumn"} handler={getId("side-bar")}/>
    </div>
  );
};

export default SideBar;