import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const FictionSection = () => {
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
        <div className="block-wrapper popular-movies">
            <div className="col-sm-12">
                <h1 className="block-heading">
                    <span>Fiction Shows</span>
                    <span>
                        <NavLink to="/show_genres/fiction/">
                            More
                            <i className="fa fa-chevron-right"></i>
                        </NavLink>
                    </span>
                </h1>
                <span className="border-bottom"></span>
                <OwlCarousel
                    className="slider shows-slider"
                    items={4}
                    margin={10}
                >
                    {sliderList.length > 0 && sliderList.map((v, i) => {
                        return (
                            <div key={"home_fiction_owl_key_" + i} className="item">
                                <div className="block-inner">
                                    <NavLink to="shows/dancing-star/">
                                        <img data-src="https://cdn.colorsodia.com/wp-content/uploads/2018/12/08104840/dancing_star-min-263x147.jpg" src="http://localhost/colorsodia/wp-content/themes/colors-channel/images/lazy-load-placeholder.jpg" alt="Dancing Star" />
                                        <h2>Dancing Star</h2>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        </div>
    );
}
export default FictionSection;