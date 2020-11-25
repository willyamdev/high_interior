import React from 'react';
import Brand from '../../../global/components/brand/Brand';
import './css/cape.css';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type PropsType = {
    image: string
}

export default function Cape(props: PropsType) {
    return (
        <div className="cape" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="cape__toolbar">
                <Brand fontSize={20}/>
                <div className="toolbar__links">
                    <Link to="/">About</Link>
                    <Link to="/">Features</Link>
                    <Link to="/">Gallery</Link>
                    <Link to="/">Contact</Link>
                </div>
                <Search />
            </div>

            <div className="cape__content">
                <h1>We make your interior from impossible to reality</h1>
                <span>Design by professional to help design your interior from impossible to reality</span>
                <button>Get started</button>
            </div>
        </div>
    )
}
