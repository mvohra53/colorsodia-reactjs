import React from 'react';
import { NavLink } from 'react-router-dom';
const GallerySection = () => {
    let sliderList = [{
        link: '/shows/subha-drusti/',
        title: 'SUBHA DRUSTI',
        image: 'https://cdn.colorsodia.com/wp-content/uploads/2019/01/22104711/SUBHA-DRUSTI-spot1.jpg'
    },
    {
        link: '/shows/sunanaki-bohu/',
        title: 'SUNANAKI BOHU',
        image: 'https://cdn.colorsodia.com/wp-content/uploads/2019/01/22104723/SUNANAKI-BOHU-spot11.jpg'
    }];
    return (
        <>
            <div className="col-sm-8">
                <div className="block-wrapper featured-block">
                    <div className="col-sm-12">
                        <h1 className="block-heading">
                            <span>Gallery</span>
                            <span></span>
                        </h1>
                        <div className="row">
                            {
                                sliderList.length > 0 && sliderList.map((v, i) => {
                                   return (
                                   <div key={`gallery_sec_${i}`} className="col-sm-6">
                                        <div className="block-inner">
                                            <NavLink to={v.link}>
                                                <img data-src="https://cdn.colorsodia.com/wp-content/uploads/2019/01/22100807/rajkannya-338x191.jpg" src="http://localhost/colorsodia/wp-content/themes/colors-channel/images/lazy-load-placeholder.jpg" alt="Rajakanya" />
                                            </NavLink>
                                        </div>
                                        <div className="block-title">
                                            <h2><NavLink to={v.link}>{v.title}</NavLink></h2>
                                            <span className="internal_img_counts">Total Images: 12</span>
                                        </div>
                                    </div>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="block-outer">
                    <div className="fb-page" data-href="https://www.facebook.com/ColorsOdiaTV/" data-tabs="timeline" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/ColorsOdiaTV/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/ColorsOdiaTV/" rel="noreferrer">Colors Odia</a>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GallerySection;