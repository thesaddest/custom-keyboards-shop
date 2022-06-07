import React from "react";

const KeyboardCard = () => {
    const testKBs = [
        {
            title: "FL680",
            description: "Small layout, easy to carry and no worries",
            price: "$115.99",
            url: "https://aliexpress.ru/item/1005002766739501.html?spm=a2g2w.productlist.0.0.2fb67c9eWblJbF&sku_id=12000028865809436",
            img: "https://img.joomcdn.net/c6c178e175db9446805739fa9418593f7c533f7f_original.jpeg",
        },
    ];

    return (
        <div className="pb-9 mb-0">
            {testKBs.map((testKB, i) => (
                <div key={i} className="pb-9 mb-0">
                    <div className="min-h-[165px] mb-2 flex flex-col items-center justify-end">
                        <a href="#">
                            <img src={testKB.img} />
                        </a>
                    </div>
                    <div className="flex flex-col items-center mt-2">
                        <h3 className="text-2xl font-semibold mb-1">
                            {testKB.title}
                        </h3>
                        <p className="text-lg font-normal leading-5 flex min-h-[50px] max-w-[160px] justify-center mt-2">
                            {testKB.description}
                        </p>
                        <p className="text-sm font-normal mt-2">
                            From {testKB.price}
                        </p>
                        <a
                            href={testKB.url}
                            className="bg-[#121212] text-white rounded-[980px] whitespace-nowrap text-center inline-block cursor-pointer
                            text-[12px] font-normal min-w-[23px] px-3 py-1 mt-4"
                        >
                            Buy
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KeyboardCard;
