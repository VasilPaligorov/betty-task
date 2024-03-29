import React, { useEffect, useState } from 'react';
import { CarouselList } from '../carouselList/carouselList';
import { getTotalWidth } from '../../helpers/utils';
import { container } from './styles';


export const InfiniteImageCarousel = ({ images = [] }) => {
    const [carouselImages, setCarouselImages] = useState(images);
    const [imagesWidth, setImagesWidth] = useState(0);
    useEffect(() => {
        getTotalWidth(images)
            .then((totalWidth) => {
                if (totalWidth !== null) {
                    while (totalWidth < window.innerWidth * 2) {
                        setCarouselImages(prev => [...prev, ...images]);
                        totalWidth *= 2;
                    }

                    setImagesWidth(totalWidth);
                }
            });
    }, [images]);

    return (
        <div className={container}>
            <CarouselList images={carouselImages} imagesWidth={imagesWidth} />
        </div>
    )

}
