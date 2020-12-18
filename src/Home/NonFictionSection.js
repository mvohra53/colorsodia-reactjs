import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const NonFictionSection = () => {
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
        <div className="block-wrapper trend-now">
            <div className="col-sm-12">
                <h1 className="block-heading">
                    <span>Non Fiction Shows</span>
                    <span>
                        <NavLink to="/show_genres/non-fiction/">
                            More
                            <i className="fa fa-chevron-right"></i>
                        </NavLink>
                    </span>
                </h1>
                <span className="border-bottom"></span>
                <OwlCarousel
                    className="slider promos-slider"
                    items={4}
                    margin={10}
                >
                    {sliderList.length > 0 && sliderList.map((v, i) => {
                        return (
                            <div className="item" key={"home_non_fiction_owl_key_" + i}>
                                <div className="block-inner">
                                    <NavLink to="/shows/dancing-star/">
                                        <img data-src="https://cdn.colorsodia.com/wp-content/uploads/2018/12/08104840/dancing_star-min-263x147.jpg" src="http://localhost/colorsodia/wp-content/themes/colors-channel/images/lazy-load-placeholder.jpg" alt="Dancing Star" />
                                    </NavLink>
                                    <NavLink to="/shows/dancing-star/" className="play-img">
                                        <img src="http://localhost/colorsodia/wp-content/themes/colors-channel/images/play.png" alt="" />
                                    </NavLink>
                                </div>
                                <div className="block-title">
                                    <h2><NavLink to="/shows/dancing-star/">Dancing Star</NavLink></h2>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        </div>
    );
}
export default NonFictionSection;