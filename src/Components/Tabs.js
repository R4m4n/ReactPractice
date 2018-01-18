import React, { Component } from 'react';
import '../App.css';

const Tabs = (props) => {

    return (
      <div className="App">
    <div className="contentdiv" style={{backgroundColor:props.bgcolor}}>
      {props.cdata}
    </div>
      </div>
    );
}


export default Tabs;
