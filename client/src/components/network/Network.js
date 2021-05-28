import React, { Component } from "react"; 
import Navbar from '../layout/Navbar';

class Network extends Component {
  render() {
    return (
     <div>
       <Navbar/>   
       <div className="network container">
        <h1>Network</h1>
       </div>
     </div>
    );
  }
}

export default Network;