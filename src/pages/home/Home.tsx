import React from 'react';
import Footer from '../global/components/footer/Footer';
import Benefit from './components/benefit/Benefit';
import BestInterior from './components/best-interior/BestInterior';
import Cape from './components/cape/Cape';
import ExploreGallery from './components/explore-gallery/ExploreGallery';
import SatisfiedCustomers from './components/satisfied-customers/SatisfiedCustomers';
import Subscribe from './components/subscribe/Subscribe';
import CapeImage from './images/home-image.jpg'

export default function Home() {

    return (
        <div>
            <Cape image={CapeImage} />
            <Benefit/>
            <BestInterior/>
            <ExploreGallery/>
            <SatisfiedCustomers/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}
