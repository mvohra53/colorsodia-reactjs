import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "./Header/HeaderMain";
import Footer from "./Footer/Footer";
import Page from "./Pages/Page";
import Home from "./Home/Home";
const App = () =>{
  return (
    <div className="wrapper">
        <div id="page" className="site">
            <Header />
            <div id="content" className="site-content">
              <Switch>
                  <Route exact path="/" render={Home}/>
              </Switch>
            </div>
            <Footer />
        </div>
    </div>
);
}
export default App;