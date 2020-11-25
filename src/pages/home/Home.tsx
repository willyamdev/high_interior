import React from 'react';
import Toolbar from '../global/components/toolbar/Toolbar';
import Cape from './components/Cape/Cape';
import CapeImage from './images/home-image.jpg'

export default function Home() {

    return (
        <div>
            <Cape image={CapeImage} />
        </div>
    );
}
