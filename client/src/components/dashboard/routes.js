// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Group from "@material-ui/icons/Group";
import Investment from './ImageIcon/Investment';
import Bitcoin from './ImageIcon/Bitcoin';
import USDT from './ImageIcon/USDT';
import iUSD from './ImageIcon/iUSD';
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
    icon: iUSD,
    component: iUSDWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/USDT_wallet",
    name: "USDT_WALLET",
    icon: USDT,
    component: USDTWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/bitcoin_wallet",
    name: "BITCOIN WALLET",
    icon: Bitcoin,
    component: BTCWalletPage,
    layout: "/dashboard"
  },
  {
    path: "/investments",
    name: "INVESTMENTS",
    icon: Investment,
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
