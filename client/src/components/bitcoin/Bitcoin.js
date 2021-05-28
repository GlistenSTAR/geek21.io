import React, { Component } from "react"; 
import Navbar from '../layout/Navbar';

class Bitcoin extends Component {
  render() {
    return (
     <div>
       <Navbar/>   
       <div className="bitcoin container">
        <h1>Bitcoin</h1>
       </div>
     </div>
    );
  }
}

export default Bitcoin;