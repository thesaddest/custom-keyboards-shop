import React, { useRef, useContext } from "react";
import { ScrollContext } from "./scroll-observer";

export const TileContext = React.createContext({
    numOfPages: 0,
    currentPage: 0,
});

export const TileWrapper = ({ children, numOfPages }) => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef(null);

    let currentPage = 0;

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
        currentPage = percentY * numOfPages;
    }
    return (
        <TileContext.Provider value={{ numOfPages, currentPage }}>
            <div
                ref={refContainer}
                className="relative bg-black text-white"
                style={{
                    height: numOfPages * 100 + "vh",
                }}
            >
                {children}
            </div>
        </TileContext.Provider>
    );
};

export const TileBackground = ({ children }) => (
    <div className="absolute w-full box-border h-full" style={{height: "inherit"}}>{children}</div>
);

export const TileContent = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

export const Tile = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TileContext);
    const progress = Math.max(0, currentPage - page);
    const refContainer = useRef(null);

    let opacity = Math.min(1, Math.max(0, progress * 4));
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4);
    }
    return (
        <div
            ref={refContainer}
            className="absolute top-0 w-full"
            style={{
                pointerEvents:
                    progress <= 0 || progress >= 1 ? "none" : undefined,
                opacity
            }}
        >
            {renderContent({ progress })}
        </div>
    );
};

export const WorkLeft = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50);
    if (progress > 0.85)
        translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
    return (
        <div
            className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
            style={{
                transform: `translateY(${translateY}px)`,
            }}
        >
            <div className="leading-10">{children}</div>
        </div>
    );
};

export const WorkRight = ({ children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50);
    return (
        <div
            className="flex flex-1 lg:items-center justify-center h-screen"
            style={{
                transform: `translateY(${translateY}px)`,
            }}
        >
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
                {children}
            </div>
        </div>
    );
};
