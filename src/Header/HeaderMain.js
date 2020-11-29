import React, { Component } from 'react';
import Logo from './Logo';
import Social from './Social';
import Menu from './Menu';
class Header extends Component {
    render() {
        return (
            <header className="header nav-down">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="header-wrapper">
                                <div className="row">
                                    <Logo />
                                    <Menu />
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;