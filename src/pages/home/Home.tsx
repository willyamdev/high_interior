import React from 'react';
import Benefit from './components/benefit/Benefit';
import BestInterior from './components/best-interior/BestInterior';
import Cape from './components/cape/Cape';
import ExploreGallery from './components/explore-gallery/ExploreGallery';
import CapeImage from './images/home-image.jpg'

export default function Home() {

    return (
        <div>
            <Cape image={CapeImage} />
            <Benefit/>
            <BestInterior/>
            <ExploreGallery/>
        </div>
    );
}
