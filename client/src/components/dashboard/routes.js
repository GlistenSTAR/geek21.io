// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Group from "@material-ui/icons/Group";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard"
  },
  {
    path: "/iUSD_wallet",
    name: "iUSD_WALLET",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard"
  },
  {
    path: "/USDT_wallet",
    name: "USDT_WALLET",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard"
  },
  {
    path: "/bitcoin_wallet",
    name: "BITCOIN WALLET",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard"
  },
  {
    path: "/investments",
    name: "INVESTMENTS",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dashboard"
  },
  {
    path: "/team",
    name: "TEAM",
    icon: Group,
    component: DashboardPage,
    layout: "/dashboard"
  }
];

export default dashboardRoutes;
