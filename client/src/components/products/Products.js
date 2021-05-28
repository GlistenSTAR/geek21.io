import React, { Component } from "react"; 
import Navbar from '../layout/Navbar';

class Products extends Component {
  render() {
    return (
     <div>
       <Navbar/>   
       <div className="products container">
         <h1>Products</h1>
       </div>    
     </div>
    );
  }
}

export default Products;