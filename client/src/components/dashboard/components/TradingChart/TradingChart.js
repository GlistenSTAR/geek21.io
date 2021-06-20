import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradingChart({symbol}) {
  return (
    <>
      <div className="chart_view mt-4 mb-4">
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