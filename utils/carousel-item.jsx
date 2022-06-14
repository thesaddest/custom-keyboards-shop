import React, {useCallback, useContext} from 'react';
import {CarouselContext} from "./carousel";
import styles from '../styles/carouse.module.css'

const CarouselItem = ({children, index}) => {
    const {embla: emblaApi, selectedIndex} = useContext(CarouselContext)
    const isActive = selectedIndex === index
    const handleClick = useCallback(() => {
        if(emblaApi === undefined) return
        emblaApi.scrollTo(index)
    }, [emblaApi, index])

    return(
        <div className={`${styles.slide} relative ${isActive ? 'active' : ''}`} onClick={handleClick}>{children}</div>
    )
};

export default CarouselItem;