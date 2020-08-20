import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

function loading(loading) {
  if (loading) {
    ReactDOM.render(
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '20px',
          marginTop: '40px',
        }}
      >
        <h1>Loading...</h1>
      </div>,
      document.getElementById('subApp')
    );
  }
}

const apps = [
  {
    name: 'app1',
    entry: '//localhost:4001',
    container: '#subApp',
    activeRule: '/app1',
    loader: loading,
  },
  // {
  //   name: 'app2',
  //   entry: '//localhost:4002',
  //   container: '#subApp',
  //   activeRule: '/app2',
  // },
];

registerMicroApps(apps);

start();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('mainApp')
);
