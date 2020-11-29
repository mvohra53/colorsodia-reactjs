import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu = () => {
    let menuList = [];
    return (
        <div className="common-h social-h">
            <div className="header-social-share">
                <ul>
                    {menuList.length > 0 && menuList.map(function (i, v) {
                        return <li key={"social_h_" + v}>
                            <NavLink to={i.link}>
                                <img src={i.icon} alt={i.name} />
                            </NavLink>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
export default Menu;