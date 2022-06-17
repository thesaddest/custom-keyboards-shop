import React from "react";
import Image from "next/image";

const KeyboardCard = ({ title, description, url, img, price }) => {
    const myLoader = ({ src }) => {
        return `${img}`;
    };
    return (
        <div className="pb-9 mb-0">
            <div className="pb-9 mb-0">
                <div className="min-h-[165px] mb-2 flex flex-col items-center justify-center">
                    <a href={url} target="_blank" rel="noreferrer">
                        <Image
                            width={500}
                            height={500}
                            src={img}
                            alt="img"
                        />
                    </a>
                </div>
                <div className="flex flex-col items-center mt-2">
                    <h3 className="text-2xl font-semibold mb-1 drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)]">
                        {title}
                    </h3>
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
                    <p className="mt-2 text-sm">
                        <a href={url}>
                            <span className="ml-2">Learn more </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="currentColor"
                                    className="bi bi-chevron-right inline-block"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyboardCard;
