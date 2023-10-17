import React from 'react';
import '../style/sideBar.css';

const SideBar = (props) => {
  const { title } = props;
  return (
    <aside className="sidebar">
      <p>{title}</p>
    </aside>
  );
};

export default SideBar;