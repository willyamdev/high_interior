import React from 'react';
import './css/best-interior.css';
import Interior02 from '../../images/interior02.jpg';

export default function BestInterior() {
    return (
        <div className="best-interior">
            <div className="best-interior__image__container">
                <img src={Interior02} alt="" />
            </div>
            <div className="best-interior__content">
                <h1>Best interior design services</h1>
                <p>
                    We work with the best professionals in the market and use the most advanced techniques and concepts to achieve incredible designs!
                </p>
                <button>View more</button>
            </div>
        </div>
    )
}
