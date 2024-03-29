import React, { useState, useEffect } from 'react'
import { getTotalWidth } from '../../helpers/utils';
import { carouselList } from './styles';

export const CarouselList = ({ images }) => {
    const [carouselImages, setCarouselImages] = useState([...images]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCarouselImages([...images]);
    }, [images]);

    const handleScroll = () => {
        getTotalWidth(carouselImages).then((totalWidth) => {
            if (window.scrollX >= totalWidth - window.innerWidth) {
                setCarouselImages([...carouselImages, images[counter % images.length]])
                setCounter(prev => prev + 1);
            } else if (window.scrollX === 0) {
                setCarouselImages([...images, ...carouselImages]);
                window.scrollTo(totalWidth, 0);
            }
            
            if (counter / images.length > Math.ceil(images.length / 2)) {
                setCounter(0);
                setCarouselImages([...images]);
            }

        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div onWheel={handleScroll} className={carouselList}>
            {carouselImages.map((image, index) => (
                <img key={index} src={image} alt="carousel" />
            ))}
        </div>
    )
}
