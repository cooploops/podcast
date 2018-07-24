import React from 'react';


const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0.5rem",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "2.5rem",
    width: "100%",
}

const phantom = {
    background: "rbg(0,0,0,0.0)",
  display: 'block',
  padding: '1rem',
  height: '3.2rem',
  width: '100%',
}

const Footer = () => (
    <div>
        <div style={phantom} />
        <div style={style}>
            Copyright 2018
        </div>
    </div>
);

export default Footer;