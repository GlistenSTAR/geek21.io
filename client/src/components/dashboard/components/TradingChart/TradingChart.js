import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart({symbol}) {
  return (
    <>
      <div className="chart_view">
        <TradingViewWidget
          symbol={symbol}
          theme={Themes.WHITE}
          locale="en"
          height={700}
          width="100%"
        />
      </div>
    </>
  );
}