import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import App from './App';
import { Pb, ShowPbData, PbData } from './Pb';

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>

  <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />

    <App />
    <ShowPbData />
    <Pb />
    <PbData />

  </StrictMode>
);
