import React from 'react';
import { NavLink } from 'react-router-dom';
import { SITE_URL } from '../Constants';
const Shows = () => {
    return (
        <main id="main" className="site-main container">
            <section id="primary" className="content-area archive-custom only-show">
                <div className="row">
                    <p id="breadcrumbs">
                        <span>
                            <span>
                                <NavLink to={'/'}>
                                    Home
                                </NavLink>
                                <span className="breadcrumb_last" aria-current="page">Shows</span>
                            </span>
                        </span>
                    </p>
                    <h1>Ye hai shows Page</h1>
                </div>
            </section>
        </main>
    );
}

export default Shows;