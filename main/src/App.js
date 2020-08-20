import React from 'react';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/app1/">APP1</Link>
        </li>
      </ul>
      <Route exact path="/">
        <h1>index</h1>
      </Route>

      <Route path="/*">
        <div id="subApp" />
      </Route>
    </div>
  );
}

export default App;
