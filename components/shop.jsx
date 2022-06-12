import React, { useEffect } from "react";
import KeyboardCard from "./keyboardCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeyboards } from "../store/keyboardsSlice";

const Shop = () => {
    const dispatch = useDispatch();
    const { keyboards, error, status } = useSelector(
        (state) => state.keyboards
    );

    useEffect(() => {
        dispatch(fetchKeyboards());
    }, []);
    return (
        <section className="bg-white h-fit w-full pt-16 pb-16 text-center lg:h-screen flex ">
            <div className="mx-auto w-[87.5%] grid justify-items-center">
                <h2 className="text-3xl text-[#121212] font-semibold md:text-4xl lg:text-5xl pt-10">
                    Which keyboard is right for you?
                </h2>
                {status === "loading" && <h2>Loading...</h2>}
                {error && <h2>An error occurred: {error}</h2>}
                <div className="grid grid-cols-2 grid-rows-16 gap-x-2.5 max-w-[500px] mt-11 md:gap-x-20 lg:max-w-[980px] lg:grid-cols-4 lg:grid-rows-8">
                    {keyboards.map((keyboard, i) => {
                        return (
                            <KeyboardCard
                                title={keyboard.title}
                                description={keyboard.description}
                                price={keyboard.price}
                                url={keyboard.url}
                                img={keyboard.img}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Shop;
