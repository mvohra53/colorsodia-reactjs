import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="footer-wrap">
                                    <ul className="col-sm-3">
                                        <li id="nav_menu-4" className="widget widget_nav_menu"><h2 className="footerwidget">Colors Odia Videos</h2><div className="menu-colors-odia-videos-container">
                                            <ul id="menu-colors-odia-videos" className="menu">
                                                <li id="menu-item-1320" className="menu-item menu-item-type-post_type menu-item-object-video menu-item-1320">
                                                    <NavLink to="/video/katha-puranara/">KATHA PURANARA</NavLink>
                                                </li>
                                                <li id="menu-item-1321" className="menu-item menu-item-type-post_type menu-item-object-video menu-item-1321">
                                                    <NavLink to="/video/sarba-mangalya/">SARBA MANGALYA</NavLink>
                                                </li>
                                                <li id="menu-item-1322" className="menu-item menu-item-type-post_type menu-item-object-video menu-item-1322">
                                                    <NavLink to="/video/swarna-khaddga/">SWARNA KHADDGA</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        </li>
                                    </ul>
                                    <ul className="col-sm-3">
                                        <li id="nav_menu-2" className="widget widget_nav_menu"><h2 className="footerwidget">Colors Odia Shows</h2>
                                            <div className="menu-colors-odia-shows-footer-container">
                                                <ul id="menu-colors-odia-shows-footer" className="menu">
                                                    <li id="menu-item-1015" className="menu-item menu-item-type-post_type menu-item-object-shows menu-item-1015">
                                                        <NavLink to="/shows/dancing-star/">Dancing Star</NavLink>
                                                    </li>
                                                    <li id="menu-item-1016" className="menu-item menu-item-type-post_type menu-item-object-shows menu-item-1016">
                                                        <NavLink to="/shows/udaan/">Udaan</NavLink>
                                                    </li>
                                                    <li id="menu-item-1017" className="menu-item menu-item-type-post_type menu-item-object-shows menu-item-1017">
                                                        <NavLink to="/shows/meera/">Meera</NavLink>
                                                    </li>
                                                    <li id="menu-item-1018" className="menu-item menu-item-type-post_type menu-item-object-shows menu-item-1018">
                                                        <NavLink to="/shows/taranath-tantrik/">Taranath Tantrik</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="col-sm-3">
                                        <li id="nav_menu-3" className="widget widget_nav_menu"><h2 className="footerwidget">About Colors Odia</h2>
                                            <div className="menu-other-channels-container">
                                                <ul id="menu-other-channels" className="menu">
                                                    <li id="menu-item-1327" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-1327">
                                                        <NavLink to="/" aria-current="page">Home Page</NavLink>
                                                    </li>
                                                    <li id="menu-item-1323" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1323">
                                                        <NavLink to="/about/">About</NavLink>
                                                    </li>
                                                    <li id="menu-item-1325" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1325">
                                                        <NavLink to="/schedules/">Schedules</NavLink>
                                                    </li>
                                                    <li id="menu-item-1328" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1328">
                                                        <NavLink to="/privacy-policy/">Privacy Policy</NavLink>
                                                    </li>
                                                    <li id="menu-item-1326" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1326">
                                                        <NavLink to="/contact-us/">Contact Us</NavLink>
                                                    </li>
                                                    <li id="menu-item-1433" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1433">
                                                        <NavLink to="/terms-of-use/">User Agreement</NavLink>
                                                    </li>
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
}

export default Footer;