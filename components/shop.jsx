import React from "react";
import KeyboardCard from "./keyboardCard";

const Shop = () => {
    return (
        <section className="bg-white h-[184vh] w-full pt-16 pb-16 text-center">
            <div className="mx-auto w-[87.5%] ">
                <h2 className="text-3xl text-[#121212] font-semibold">
                    Which Mech Keyboard is right for you?
                </h2>
                <div className="grid grid-cols-2 grid-rows-16 gap-x-2.5 max-w-[500px] mt-11">
                    <KeyboardCard />
                    <KeyboardCard />
                    <KeyboardCard />
                    <KeyboardCard />
                </div>
            </div>
        </section>
    );
};

export default Shop;
