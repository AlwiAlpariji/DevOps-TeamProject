import React from 'react';
import "../style/Wrapper.css"

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;