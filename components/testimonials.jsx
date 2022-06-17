import React from 'react';
import Carousel from "../utils/carousel";
import CarouselItem from "../utils/carousel-item";
import Review from "./review";

const Testimonials = () => {
    return (
        <Carousel className="bg-black text-white py-10 lg:py-20 ">
            <CarouselItem index={0}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="Adam Carlton (CEO of NiP)">
                    Mech Custom Keyboards is a collection of world class talent from all over the world,
                    I&apos;ve been nothing but pleased with their communication, imagination, insight and delivery.
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="Taeha Types (Streamer | YT Channel)">
                    The output of Mech Custom Keyboards is unlike any other team we&apos;ve worked with.
                    Their speed, professionalism and familiarity with all the technologies made me go crazy.
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="Voldemar (YT Channel)">
                    Mech Custom Keyboards and Voldemar bot share the love for high-quality keyboards and
                    the passion for building something people want.
                </Review>
            </CarouselItem>
            <CarouselItem index={4}>
                <Review by="Adam Carlton (CEO of NiP)">
                    Mech Custom Keyboards is a collection of world class talent from all over the world,
                    I&apos;ve been nothing but pleased with their communication, imagination, insight and delivery.
                </Review>
            </CarouselItem>
        </Carousel>
    );
};

export default Testimonials;