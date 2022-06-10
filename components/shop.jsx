import React from "react";
import KeyboardCard from "./keyboardCard";

const Shop = () => {
    const data = [
        {
            title: "FL680",
            description: "Small layout, easy to carry and no worry.",
            price: "$115.99",
            url: "https://aliexpress.ru/item/1005002766739501.html?spm=a2g2w.productlist.0.0.2fb67c9eWblJbF&sku_id=12000028865809436",
            img: "https://img.joomcdn.net/c6c178e175db9446805739fa9418593f7c533f7f_original.jpeg",
        },
        {
            title: "FL Q75",
            description: "High-gloss mirror, appearance is lit.",
            price: "$145.99",
            url: "https://a.aliexpress.com/_m0FHiqI",
            img: "https://hanoicomputercdn.com/media/product/65246_ban_phim_co_khong_day_fl_esport_q75_blue_haze_3_mode_jellyfish_sw_kailh_box_usbc_bluetooth_rgb_0000_1.jpg",
        },
        {
            title: "FL CMK87",
            description: "Color scheme aluminium alloy hit.",
            price: "$155.99",
            url: "https://a.aliexpress.com/_mtegtE6",
            img: "https://product.hstatic.net/1000026716/product/61414_ban_phim_co_flesport_cmk87_ice_mint_coolmint_sw_kailh_box_0004_5_a5ce03d9b8634940b95f54346343d319.jpg",
        },
        {
            title: "FL 980",
            description: "98 keys to save the desktop space.",
            price: "$165.99",
            url: "https://a.aliexpress.com/_m0CFvHC",
            img: "https://cdn.shopify.com/s/files/1/0588/1108/9090/products/1_33c6769b-dd65-41a4-a471-a1ae88b18207_1024x1024@2x.jpg?v=1645008251",
        },
    ];

    return (
        <section className="bg-white h-fit w-full pt-16 pb-16 text-center lg:h-screen">
            <div className="mx-auto w-[87.5%] grid justify-items-center">
                <h2 className="text-3xl text-[#121212] font-semibold md:text-4xl lg:text-5xl">
                    Which keyboard is right for you?
                </h2>
                <div className="grid grid-cols-2 grid-rows-16 gap-x-2.5 max-w-[500px] mt-11 md:gap-x-20 lg:max-w-[980px] lg:grid-cols-4 lg:grid-rows-8">
                    {data.map((keyboard, i) => {
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
