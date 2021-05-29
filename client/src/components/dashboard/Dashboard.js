import React, {Component} from "react";

import Admin from "./layouts/Admin.js";
import "../../assets/css/material-dashboard-react.css?v=1.9.0";

class Dashboard extends Component {
  render() {
    return (
     <div className="dashboard">
       <Admin />
     </div>
    );
  }
}

export default Dashboard;
