import React from 'react';

const Review = ({children, by}) => {
    return (
        <div className="flex flex-col justify-center items-center px-5 md:px-10 lg:px-20">
            <div className="text-[0.65rem] md:text-2xl leading-5 lg:leading-[3rem] tracking-tight">
                &ldquo;{children}&rdquo;
            </div>
            <div className="mt-6">&mdash; {by}</div>
        </div>
    );
};

export default Review;