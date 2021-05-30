import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../routes.js";
import Profile from '../views/Profiles/profile';

import styles from "../../../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../../../assets/img/showcase.jpg";
import logo from "../logo_white.png";

let ps;

const switchRoutes = (
  <Switch>
    <Route
      path="/dashboard/profile"
      component={Profile}
    />
    {routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
        );
      }
      return null;
    })}
    <Redirect from="/dashboard" to="/dashboard/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const classes = useStyles();
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>
      </div>
    </div>
  );
}
