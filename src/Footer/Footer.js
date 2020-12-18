import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { SITE_URL, FOOTER_VIDEO_URL, FOOTER_SHOWS_URL, FOOTER_MENU_URL } from '../Constants';
import "./Footer.css";
const Footer = () => {
    const [footerVideo, setFooterVideo] = useState([]);
    const [footerShow, setFooterShow] = useState([]);
    const [footerMenu, setFooterMenu] = useState([]);
    useEffect(() => {
        Promise.all([getFooterVideo(), getFooterShows(),getFooterMenus()])
            .then(function (results) {
                let videosMenus = typeof (results[0].data.items) !== "undefined" ? results[0].data.items : [];
                let showMenus = typeof (results[1].data.items) !== "undefined" ? results[1].data.items : [];
                let menus = typeof (results[2].data.items) !== "undefined" ? results[2].data.items : [];
                setFooterVideo(videosMenus);
                setFooterShow(showMenus);
                setFooterMenu(menus);
            });
    }, []);
    const getFooterVideo = async () => {
        return await axios.get(`${FOOTER_VIDEO_URL}`);
    }
    const getFooterShows = async () => {
        return await axios.get(`${FOOTER_SHOWS_URL}`);
    }
    const getFooterMenus = async () => {
        return await axios.get(`${FOOTER_MENU_URL}`);
    }
    const liHtml = (v) => {
        let replaceURl = (v.url).replace(SITE_URL, '');
        return <li key={`menu-item-${v.id}`} id={`menu-item-${v.id}`} className={`menu-item menu-item-type-post_type menu-item-${v.id}`}>
            <NavLink to={replaceURl}>{v.title}</NavLink>
        </li>
    }
    const createMenuList = (items) => {
        let object = [];
        if (items.length > 0) {
            items.map(function (v, i) {
                object.push(liHtml(v));
                return false;
            });
        }
        return object;
    }
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="footer-wrap">
                                <ul className="col-sm-3">
                                    <li id="nav_menu-4" className="widget widget_nav_menu">
                                        <h2 className="footerwidget">Colors Odia Videos</h2>
                                        <div className="menu-colors-odia-videos-container">
                                            <ul id="menu-colors-odia-videos" className="menu">
                                                {createMenuList(footerVideo)}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="col-sm-3">
                                    <li id="nav_menu-2" className="widget widget_nav_menu"><h2 className="footerwidget">Colors Odia Shows</h2>
                                        <div className="menu-colors-odia-shows-footer-container">
                                            <ul id="menu-colors-odia-shows-footer" className="menu">
                                                {createMenuList(footerShow)}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="col-sm-3">
                                    <li id="nav_menu-3" className="widget widget_nav_menu"><h2 className="footerwidget">About Colors Odia</h2>
                                        <div className="menu-other-channels-container">
                                            <ul id="menu-other-channels" className="menu">
                                                {createMenuList(footerMenu)}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="col-sm-3">
                                    <li id="text-2" className="widget widget_text">
                                        <div className="textwidget">
                                            <p>
                                                <a href="https://www.viacom18.com/" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://cdn.colorsodia.com/wp-content/uploads/2019/02/01155010/viacom-18-logo.png" alt="Viacom18" />
                                                </a>
                                            </p>
                                            <h5>Viacom18 Media Pvt. Ltd. is one of India’s fastest growing entertainment networks and a house of iconic brands that offers multi-platform, multi-generational and multicultural brand experiences.</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-inner">
                                <h2>© Viacom18 Media Pvt. Ltd. 2020.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;