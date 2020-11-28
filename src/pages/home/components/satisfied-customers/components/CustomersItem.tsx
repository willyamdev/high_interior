import React from 'react';

type InputProps = {
    name: string,
    profession: string,
    photo: string,
    spotLight: string,
    comment: string
}

export default function CustomersItem(props: InputProps) {
    return (
        <div className="customers__item">
            <div className="customer__info">
                <img src={props.photo} alt="" className="customer__photo" />

                <div className="customer__name">
                    <span>{props.name}</span>
                    <span>{props.profession}</span>
                </div>
            </div>

            <h3>"{props.spotLight}"</h3>

            <p>{props.comment}</p>
        </div>
    )
}
