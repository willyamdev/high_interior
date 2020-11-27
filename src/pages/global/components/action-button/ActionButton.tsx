import React from 'react';
import './css/action-button.css';

type PropsType = {
    children?: any
}

export default function ActionButton(props: PropsType) {
    return (
        <button className="action-button">
            {props.children}
        </button>
    )
}
