import React, { Component } from 'react';
import Header from "./Header/HeaderMain";
class Page extends Component {
    render() {
        return (
            <div className="wrapper">
                <div id="page" className="site">
                    <Header />
                </div>
            </div>
        );
    }
}

export default Page;