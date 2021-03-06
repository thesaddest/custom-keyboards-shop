import React from "react";

export const WorkContainer = ({ children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {children}
    </div>
);

export const WorkBackground = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-black h-[30vh] lg:h-auto"></div>
        <div className="bg-white h-[70vh] lg:min-h-screen"></div>
    </div>
);
