import React, { Component } from "react"; 
import Navbar from '../layout/Navbar';

class Academy extends Component {
  render() {
    return (
     <div>
       <Navbar/>   
       <div className="academy container">
        <h1>Academy</h1>
       </div>
     </div>
    );
  }
}

export default Academy;