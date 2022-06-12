import React, { useContext, useRef } from "react";
import s from "../styles/passions.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) return 1;
    return 0.2;
};

const Passions = () => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef(null);

    const numOfPages = 3;
    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight;
        progress = Math.min(
            numOfPages - 0.5,
            Math.max(0.5, percentY * numOfPages)
        );
    }
    return (
        <div ref={refContainer} className="text-white bg-black">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div
                        className={s.passionText}
                        style={{ opacity: opacityForBlock(progress, 0) }}
                    >
                        We will help you make the best board you ever dreamed
                        of, it will be made with love.
                    </div>
                    <span
                        className={`${s.passionText} inline-block after:content-['_']`}
                        style={{ opacity: opacityForBlock(progress, 1) }}
                    >
                        Our team has made more than 100 keyboards already.
                    </span>
                    <span
                        className={`${s.passionText} inline-block`}
                        style={{ opacity: opacityForBlock(progress, 2) }}
                    >
                        We&apos;re building keyboards with the highest quality
                        components.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Passions;
