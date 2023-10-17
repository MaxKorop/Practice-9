import React from 'react';
import '../style/content.css';

const Content = (props) => {
  const { title } = props;
  return (
    <div className="content">
      <p className="name_content">{title}</p>
      <p>This is the main content</p>
    </div>
  );
};

export default Content;