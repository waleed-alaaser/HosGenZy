import {Link }from "react-router-dom";
import React, { useState } from 'react';
import '../../App.css';
import '../../style/normalize.css';
//import '../style/charts.css';
import '../../style/all.min.css';
import Sidebar from "../component/sidebar";

const Index = () => {
  return (
    <div className="containerDash">
      <Sidebar/>
        <h1>fire detection</h1>
    </div>
  );
};

export default Index