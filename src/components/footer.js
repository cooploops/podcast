import React from 'react';
import {Label} from 'semantic-ui-react';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '70px',
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