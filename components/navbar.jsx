import React from "react";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
    const linkItems = ["HOME", "ABOUT", "KEYBOARD KITS", "SERVICE"];
    const [isClicked, setIsClicked] = useState(false);
    const isDestop = useMediaQuery("(min-width: 768px)");
    const toggleClasses = () => {
        setIsClicked(!isClicked);
    };

    return (
        <nav className="flex justify-around items-center h-[8vh] z-20 bg-[#121212] md:pr-80">
            <div className="tracking-[3px] text-xl">
                <h4 className="text-[#f8fafc]">CUSTOMKBS</h4>
            </div>
            <ul
                className={
                    isClicked || isDestop
                        ? "translate-x-0 z-20"
                        : "translate-x-full z-20"
                }
            >
                {linkItems.map((linkItem, index) => (
                    <li key={index}>
                        <a
                            className={
                                isClicked ? "navLinksFadeIn" : "navLinksFadeOut"
                            }
                        >
                            {linkItem}
                        </a>
                    </li>
                ))}
            </ul>
            <div
                className="block md:invisible cursor-pointer"
                onClick={toggleClasses}
            >
                <div
                    className={
                        isClicked
                            ? "transitionAllEase rotate-45 translate-y-[1px] translate-x-[-5px] w-6 h-0.5 bg-[#f8fafc] m-1"
                            : "transitionAllEase md:hidden w-6 h-0.5 bg-[#f8fafc] m-1"
                    }
                ></div>
                <div
                    className={
                        isClicked
                            ? "transitionAllEase opacity-0"
                            : "transitionAllEase md:hidden w-6 h-0.5 bg-[#f8fafc] m-1"
                    }
                ></div>
                <div
                    className={
                        isClicked
                            ? "transitionAllEase rotate-[-45deg] translate-y-[-6px] translate-x-[-5px] w-6 h-0.5 bg-[#f8fafc] m-1"
                            : "transitionAllEase md:hidden w-6 h-0.5 bg-[#f8fafc] m-1"
                    }
                ></div>
            </div>
        </nav>
    );
};

export default Navbar;
