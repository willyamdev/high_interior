import React from 'react';
import ActionButton from '../../../global/components/action-button/ActionButton';
import './css/explore-gallery.css';

import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@material-ui/icons';

import image01 from '../../images/slide-images/image01.jpg';
import image02 from '../../images/slide-images/image02.jpg';
import image03 from '../../images/slide-images/image03.jpg';
import image04 from '../../images/slide-images/image04.jpg';
import image05 from '../../images/slide-images/image05.jpg';
import image06 from '../../images/slide-images/image06.jpg';
import image07 from '../../images/slide-images/image07.jpg';

export default function ExploreGallery() {

    let images: Array<string> = [
        image01,
        image02,
        image03,
        image04,
        image05,
        image06,
        image07
    ];

    return (
        <div className="explore-gallery">
            <div className="explore-gallery__header">
                <div className="explore-gallery__header__title">
                    <h1>Explore Gallery</h1>
                    <p>Photo shot from completed project interior design.</p>
                </div>
                <div className="explore-gallery__header__action">
                    <ActionButton>View more</ActionButton>
                </div>
            </div>
            <div className="explore-gallery__slider">


                <div className="explore-gallery__slider__btn btn-back">
                    <ArrowBackIosOutlined />
                </div>

                <div className="explore-gallery__slider__btn btn-forward">
                    <ArrowForwardIosOutlined />
                </div>

                {images.map((data, index) => (
                    <div className="image-slide" key={index}
                        style={{
                            backgroundImage: `url(${data})`
                        }}
                    />
                ))}

            </div>
        </div>
    )
}
