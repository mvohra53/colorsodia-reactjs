import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header/HeaderMain";
import Footer from "./Footer/Footer";
import Page from "./Pages/Page";
import Shows from "./Pages/Shows";
import ShowsSingle from "./Pages/ShowsSingle";
import Home from "./Home/Home";
const App = () => {
  return (
    <div className="wrapper">
      <div id="page" className="site">
        <Header />
        <div id="content" className="site-content">
          <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/shows/" render={Shows} />
            <Route exact path="/shows/:slug" render={ShowsSingle} />
            <Route exact path="/video/:slug" render={Page} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;