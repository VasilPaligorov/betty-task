import React, { useState, useEffect } from 'react'
import { makeTheFirstElementLast, makeTheLastElementFirst } from '../../helpers/utils';

export const CarouselList = ({ images, imagesWidth }) => {
    const [carouselImages, setCarouselImages] = useState([...images]);

    useEffect(() => {
        setCarouselImages([...images]);
    }, [images]);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (imagesWidth > 0) {
                if (window.scrollX + window.innerWidth >= imagesWidth / 2) {
                    const newImages = makeTheFirstElementLast(carouselImages);
                    setCarouselImages(newImages);
                } else if (window.scrollX === 0) {
                    const newImages = makeTheLastElementFirst(carouselImages);
                    setCarouselImages(newImages);
                }
            }
        });
    }, [carouselImages, imagesWidth]);

    return (
        carouselImages.map((image, index) => (
            <img key={index} src={image} alt="carousel" />
        ))
    )
}
