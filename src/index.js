import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JotaiApp from './Jotai/JotaiApp';
import ZustandApp from './Zustand/ZustandApp';
import ContextApp from './Context/ContextApp';
import ConstateApp from './Constate/ConstateApp';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './Context/contexts/ThemeContext';
import { ThemeContextConstateProvider } from './Constate/hooks/useTheme';
import { Tabs } from '@contentful/f36-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeContextConstateProvider>
        <Tabs>
          <Tabs.List variant="vertical-divider">
            <Tabs.Tab panelId="first">Context</Tabs.Tab>
            <Tabs.Tab panelId="second">Jotai</Tabs.Tab>
            <Tabs.Tab panelId="third">Zustand</Tabs.Tab>
            <Tabs.Tab panelId="fourth">Constate</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">
            <ContextApp />
          </Tabs.Panel>
          <Tabs.Panel id="second">
            <JotaiApp />
          </Tabs.Panel>
          <Tabs.Panel id="third">
            <ZustandApp />
          </Tabs.Panel>
          <Tabs.Panel id="fourth">
            <ConstateApp />
          </Tabs.Panel>
        </Tabs>
      </ThemeContextConstateProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
