import React from "react";

const KeyboardCard = ({ title, description, url, img, price }) => {
    return (
        <div className="pb-9 mb-0">
            <div className="pb-9 mb-0">
                <div className="min-h-[165px] mb-2 flex flex-col items-center justify-center">
                    <a href={url} target="_blank">
                        <img src={img} />
                    </a>
                </div>
                <div className="flex flex-col items-center mt-2">
                    <h3 className="text-2xl font-semibold mb-1">{title}</h3>
                    <p className="text-lg font-normal leading-5 flex min-h-[50px] max-w-[160px] justify-center mt-2">
                        {description}
                    </p>
                    <p className="text-sm font-normal mt-2">From {price}</p>
                    <a
                        href={url}
                        className="bg-[#121212] text-white rounded-[980px] whitespace-nowrap text-center inline-block cursor-pointer
                            text-[12px] font-normal min-w-[23px] px-3 py-1 mt-4"
                    >
                        Buy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default KeyboardCard;
