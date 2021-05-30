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
    layout: "/dashboard",
    description:"Summary of your investment profile in Geek."
  },
  {
    path: "/iUSD_wallet",
    name: "iUSD_WALLET",
    icon: iUSD,
    component: iUSDWalletPage,
    layout: "/dashboard",
    description:"Geek's iUSD wallet. Here are your iUSD, you can send receive bitcoins anonymously and safely."
  },
  {
    path: "/USDT_wallet",
    name: "USDT_WALLET",
    icon: USDT,
    component: USDTWalletPage,
    layout: "/dashboard",
    description:"Geek's USDT wallet. Here are your USDT, you can send receive bitcoins anonymously and safely."
  },
  {
    path: "/bitcoin_wallet",
    name: "BITCOIN WALLET",
    icon: Bitcoin,
    component: BTCWalletPage,
    layout: "/dashboard",
    description:"Geek's Bitcoins Wallet. Here are your bitcoins, you can send receive bitcoins anonymously and safely."
  },
  {
    path: "/investments",
    name: "INVESTMENTS",
    icon: Investment,
    component: InvestPage,
    layout: "/dashboard",
    description:"Review your crypto portfolio and your other investments, reinvest and continue generating income stream with Geek."
  },
  {
    path: "/team",
    name: "TEAM",
    icon: Group,
    component: TEAMPage,
    layout: "/dashboard",
    description:"Here you can see your whole team"
  }
];

export default dashboardRoutes;
