import React from 'react';
import Carousel from "../utils/carousel";
import CarouselItem from "../utils/carousel-item";
import Review from "./review";

const Testimonials = () => {
    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={0}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={4}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
        </Carousel>
    );
};

export default Testimonials;