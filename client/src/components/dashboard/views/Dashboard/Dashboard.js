import React, {useState} from "react";
import TradingChart from '../../components/TradingChart/TradingChart';

export default function Dashboard() {
  const [tab, setTab] = useState('BINANCE:BTCUSD');

  return (
    <div>
      <TradingChart symbol={tab} /> 
    </div>
  );
}
