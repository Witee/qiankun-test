import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function getRootEle(props = {}) {
  const { container } = props;

  return container ? container.querySelector('#root') : document.getElementById('root');
}

const render = (props) => {
  ReactDOM.render(<App />, getRootEle(props));
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props);
  render(props);
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(getRootEle(props));
}
