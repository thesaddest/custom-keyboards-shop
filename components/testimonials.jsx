import React from 'react';
import Carousel from "../utils/carousel";
import CarouselItem from "../utils/carousel-item";

const Testimonials = () => {
    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={0}>
                <div>Review 1</div>
            </CarouselItem>
        </Carousel>
    );
};

export default Testimonials;