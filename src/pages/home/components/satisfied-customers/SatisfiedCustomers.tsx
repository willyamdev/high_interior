import React, { useRef } from 'react';
import CustomersItem from './components/CustomersItem';
import './css/satisfied-customers.css';
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@material-ui/icons';

import image01 from '../../images/customers/image01.jpeg';
import image02 from '../../images/customers/image02.jpeg';
import image03 from '../../images/customers/image03.jpeg';
import image04 from '../../images/customers/image04.jpeg';

export default function SatisfiedCustomers() {

    let sliderContainer = useRef<HTMLDivElement>(null);

    function prev() {
        let sliderElement = sliderContainer.current;
        sliderElement?.scrollTo(sliderElement?.scrollWidth, 0);
    }

    function back() {
        let sliderElement = sliderContainer.current;
        sliderElement?.scrollTo(0, 0);
    }

    return (
        <div className="satisfied-customers">
            <h1>Our satisfied customers are saying</h1>
            <div className="satisfied-customers__contaier">

                <div className="satisfied-customers__btn" onClick={back}>
                    <ArrowBackIosOutlined />
                </div>

                <div className="satisfied-customers__slider" ref={sliderContainer}>
                    <CustomersItem name="Sarah Rusmman" profession="Housewife" photo={image01} spotLight="Perfect result" comment="The designer is very kind and smart providing stunning experience interior design the result is giving me satisfy." />
                    <CustomersItem name="Daniel Smith" profession="Lawyer" photo={image02} spotLight="Friendly and smart" comment="The designers are very friendly and competent, it is amazing to see how my house looked after using the services of High Interior." />
                    <CustomersItem name="John Williams" profession="Engineer" photo={image03} spotLight="Unbelievable" comment="When I saw the plan I didn't think it would be exactly the same as planned, but I was wrong, it was incredibly good and faithful to the plan." />
                    <CustomersItem name="Lydia Summers" profession="Doctor" photo={image04} spotLight="Impressive details" comment="The attention to detail is undoubtedly one of the biggest points of the company, it made a big difference for me." />
                </div>

                <div className="satisfied-customers__btn" onClick={prev}>
                    <ArrowForwardIosOutlined />
                </div>

            </div>
        </div>
    )
}
