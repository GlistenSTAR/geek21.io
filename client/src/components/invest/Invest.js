import React, { Component } from "react"; 
import Navbar from '../layout/Navbar';

class Invest extends Component {
  render() {
    return (
     <div>
       <Navbar/>   
       <div className="invest container">
        <h1>Invest</h1>
       </div>
     </div>
    );
  }
}

export default Invest;