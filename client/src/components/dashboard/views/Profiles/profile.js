import React from 'react'

import styles from "../../../../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function profile() {
  const classes = useStyles();

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
      </div>
    </div>
  )
}
