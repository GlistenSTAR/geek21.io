import React, {useState, useEffect, useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import TradingChart from '../../components/TradingChart/TradingChart';

export default function Dashboard() {
  const [tab, setTab] = useState('BINANCE:BTCUSD');
  const { store } = useContext(ReactReduxContext)
  const { getState } = store
  let status = getState();
  let date = new Date();
  if(date.getHours())
  return (
    <div>
      <div className="chart_view p-3">
        <div className="display-4 mt-2 mb-4" align="center" style={{color:'grey'}}>
          Welcome {status.auth.user.name}
        </div>
        <div className="row balances mb-4">
          <div className="col-md-4 col-sm-12 col-12" align="center">
            <label className="text-info" style={{fontSize:'18px'}}>iUSD balance</label><br/>
            <label className="text-primary" style={{fontSize:'32px'}}>200USD</label><br/>
            <button className="btn deposit">Deposit</button>
            <button className="btn withdraw ml-4">Withdraw</button>
          </div>
          <div className="col-md-4 col-sm-12 col-12" align="center">
            <label className="text-info" style={{fontSize:'18px'}}>Investments Balance</label><br/>
            <label className="text-primary" style={{fontSize:'32px'}}>4.5242 BTC</label><br/>
            <button className="btn deposit">Deposit</button>
            <button className="btn withdraw ml-4">Withdraw</button>
          </div>
          <div className="col-md-4 col-sm-12 col-12" align="center">
            <label className="text-info" style={{fontSize:'18px'}}>Cripto Balance</label><br/>
            <label className="text-primary" style={{fontSize:'32px'}}>5.1002 BTC</label><br/>
            <button className="btn deposit">Deposit</button>
            <button className="btn withdraw ml-4">Withdraw</button>
          </div>
        </div>
      </div>
      <TradingChart symbol={tab} /> 
      <div className="chart_view p-3 next_month_payment" align="center">
        <label className="display-4 text-primary">Next Month payment</label>
        <div>1200</div>
      </div>
    </div>
  );
}
