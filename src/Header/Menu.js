import React from 'react';

const Menu = () => {
    let menuList = [];
    return (
        <div className="common-h social-h">
            <div className="header-social-share">
                <ul>
                    {menuList.length > 0 && menuList.map(function (i, v) {
                        return <li key={"social_h_" + v}>
                            <a href={i.link} rel="noreferrer" target="_blank">
                                <img src={i.icon} alt={i.name} />
                            </a>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
export default Menu;