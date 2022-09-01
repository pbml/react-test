import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { Pb, ShowPbData, PbData } from './Pb';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <ShowPbData />
    <Pb />
    <PbData />

  </StrictMode>
);
