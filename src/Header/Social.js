import React from 'react';

const Social = () => {
    let socialList = [
        {
            name: 'Facebook',
            icon: '/assets/images/facebook.png',
            link: 'https://www.facebook.com/ColorsOdiaTV/'
        },
        {
            name: 'Twitter',
            icon: '/assets/images/twitter.png',
            link: 'https://twitter.com/ETVOdia'
        },
        {
            name: 'Youtube',
            icon: '/assets/images/youtube.png',
            link: 'https://www.youtube.com/user/etvodiaindia'
        }
    ];
    return (
        <div className="common-h social-h">
            <div className="header-social-share">
                <ul>
                    {socialList.length > 0 && socialList.map(function (i, v) {
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
export default Social;