import React from 'react';
import AllNews from '../AllNews/AllNews';
import Sideber from '../Sideber/Sideber';
import CarouselTOP from './Carousel/CarouselTOP';

const Header = () => {
    return (
        <div className="d-flex">
            <div className="m-2 col-2">
                <Sideber></Sideber>
            </div>
            <div className="text-center col-9">
                <CarouselTOP></CarouselTOP>
                <AllNews></AllNews>
            </div>
        </div>

    );
};

export default Header;