import React, { useContext, useRef, useEffect, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const refContainer = useRef(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }
    const handleImageLoaded = useEffect(() => {
        setImageLoaded(true);
    }, []);
    return (
        <div
            ref={refContainer}
            className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`,
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
            >
                <source src="../assets/back-ver2.mp4" type="video/mp4" />
            </video>
            <div
                className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
                text-center flex-1 flex items-center justify-center flex-col"
            >
                <h1 className="mb-6 text-4xl xl:text-5xl">
                    Custom Mech Keyboards
                </h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
                    <span>Keyboard building, </span> <span>done right.</span>
                </h2>
            </div>
            <div
                onLoad={handleImageLoaded}
                className={`flex-grow-0 pb-20 md:pb-10 z-10`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    className={`bi bi-chevron-down transition-all duration-1000 ${
                        imageLoaded
                            ? "opacity-100"
                            : "opacity-0 -translate-y-10"
                    }`}
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Masthead;
