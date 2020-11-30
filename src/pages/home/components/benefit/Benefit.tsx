import React from 'react';
import './css/benefit.css';
import BenefitItem from './components/BenefitItem';
import Interior01 from '../../images/interior01.jpg';

export default function Benefit() {

    return (
        <div className="benefit">
            <div className="benefit__topics">
                <h1>Benefit using our services</h1>
                <BenefitItem beginExpanded={true} benefitNumber="01" benefitName="Best quality" benefitDescription="Our design for your future home interior is best quality because is design by professional." />
                <BenefitItem benefitNumber="02" benefitName="Warranty" benefitDescription="Be sure to receive the best design on the market, with the best practices and techniques!" />
                <BenefitItem benefitNumber="03" benefitName="Limitless design" benefitDescription="We give you total creative freedom, your ideas will have no limits and will be put into practice." />
            </div>
            <div className="benefit__images">
                <img src={Interior01} alt=""/>
            </div>
        </div>
    )
}
