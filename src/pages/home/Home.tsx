import React from 'react';
import Benefit from './components/Benefit/Benefit';
import BestInterior from './components/best-interior/BestInterior';
import Cape from './components/Cape/Cape';
import CapeImage from './images/home-image.jpg'

export default function Home() {

    return (
        <div>
            <Cape image={CapeImage} />
            <Benefit/>
            <BestInterior/>
        </div>
    );
}
