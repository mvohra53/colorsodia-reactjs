import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.css";
const Home = () => {
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
            {/* Slider Start */}
            <section>
                <div className="home-slider-wrapper">
                    <OwlCarousel
                        className="home-slider owl-theme"
                        loop
                        center
                        autoplay
                        nav
                        items={1}
                    >
                        {sliderList.length > 0 && sliderList.map((v, i) => {
                            console.log(v, i);
                            return (
                                <div key={"home_owl_key_"+i} className="item">
                                    <NavLink to={v.link} className="spot-event">
                                        <img src={v.image} alt={v.image} />
                                        <div className="slider-title">
                                            <h1>{v.title}</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}
export default Home;