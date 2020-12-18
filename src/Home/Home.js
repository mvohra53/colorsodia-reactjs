import React from 'react';
import BannerSection from './BannerSection';
import FictionSection from './FictionSection';
import NonFictionSection from './NonFictionSection';
import GallerySection from './GallerySection';
import "./Home.css";
const Home = () => {
    
    return (
        <>
            {/* Slider Start */}
            <BannerSection />
            {/* Home Content */}
            <section className="content-sec">
                <div className="container">
                    <div className="row">
                        <div className="content-wrapper">
                            {/* Fiction Show starts */}
                            <FictionSection />
                            {/* Non Fiction */}
                            <NonFictionSection />
                            {/* Gallery Section */}
                            <GallerySection />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;