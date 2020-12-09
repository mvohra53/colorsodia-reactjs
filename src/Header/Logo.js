import React from 'react';
import { NavLink } from 'react-router-dom';
const Logo = () => {
    return (
        <div className="common-h logo-h">
            <div className="logo">
                <NavLink to="/">
                    <img src="https://cdn.colorsodia.com/wp-content/uploads/2019/01/22095426/odia-logo1.png" alt="logo" />
                </NavLink>
            </div>
        </div>
    );
};
export default Logo;