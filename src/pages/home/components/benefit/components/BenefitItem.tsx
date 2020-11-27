import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

type PropsTypes = {
    beginExpanded?: boolean,
    benefitNumber: string,
    benefitName: string,
    benefitDescription: string
}

export default function BenefitItem(props: PropsTypes) {

    const [isExpanded, setExpanded] = useState(props.beginExpanded);

    return (
        <div className="benefit__topic__item">
            <span>{props.benefitNumber}</span>
            <div className="content__item__content">
                <div className="item__header">
                    <span onClick={() => setExpanded(!isExpanded)}>{props.benefitName}</span>
                    <ArrowRightIcon className={isExpanded ? "benefit__arrow benefit__arrow--down" : "benefit__arrow"} onClick={() => setExpanded(!isExpanded)} />
                </div>
                <div className={isExpanded ? "item__description item__description--expanded" : "item__description"}>
                    <p>{props.benefitDescription}</p>
                </div>
            </div>
        </div>
    )
}
