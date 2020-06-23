import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">Goto page two</Link>PageOne
    </div>
  );
};

const PageTwo = () => {
  return (
      <div>
        Page Two
        <Link to="/">back to main</Link>
      </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
