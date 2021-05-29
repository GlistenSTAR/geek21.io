// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Group from "@material-ui/icons/Group";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import iUSDWalletPage from "./views/Dashboard/iUSD/iUSD_wallet.js";
import USDTWalletPage from "./views/Dashboard/USDT/USDT_wallet.js";
import BTCWalletPage from "./views/Dashboard/BTC/BTC_wallet.js";
import InvestPage from "./views/Dashboard/Invest/Invest.js";
import TEAMPage from "./views/Dashboard/TEAM/team.js";

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
    component: iUSDWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/USDT_wallet",
    name: "USDT_WALLET",
    icon: Dashboard,
    component: USDTWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/bitcoin_wallet",
    name: "BITCOIN WALLET",
    icon: Dashboard,
    component: BTCWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/investments",
    name: "INVESTMENTS",
    icon: Dashboard,
    component: InvestPage,
    layout: "/dashboard"
  },
  {
    path: "/team",
    name: "TEAM",
    icon: Group,
    component: TEAMPage,
    layout: "/dashboard"
  }
];

export default dashboardRoutes;
