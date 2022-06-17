import React from "react";
import Testimonials from "./testimonials";
import s from '../styles/trustedby.module.css'

const TrustedBy = () => (
    <section className= {`bg-white min-h-screen flex flex-col justify-center items-center gap-16 md:gap-32 ${s.bg}`}>
        <div className="flex flex-col justify-center items-center overflow-x-hidden">
            <h3 className="text-xl mb-10 font-bold text-center max-w-[320px]">
                <span className="whitespace-nowrap text-4xl">trusted by</span> {' '}
                <span className="whitespace-nowrap">esportsmen and content-creators</span>
            </h3>
            <Testimonials />
        </div>
    </section>
);

export default TrustedBy;
