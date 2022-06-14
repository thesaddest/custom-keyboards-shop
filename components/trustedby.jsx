import React from "react";
import Testimonials from "./testimonials";

const TrustedBy = () => (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center gap-16 md:gap-32">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl mb-10 font-bold text-center">
                <span className="whitespace-nowrap text-4xl">trusted by</span> {' '}
                <span className="whitespace-nowrap">esportsmen and content-creators</span>
            </h3>
            <Testimonials />
        </div>
        <div className="flex flex-col justify-centter items-center">
            <div className="mx-auto lg:max-w-[70%] lg:px-10">
                <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
                    Our responsibility is to develop and design the best typing experience product to help enhance everyday comfort.
                </h3>
            </div>
        </div>
    </section>
);

export default TrustedBy;
