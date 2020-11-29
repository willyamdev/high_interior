import React from 'react';
import './css/brand.css';

type PropsTypes = {
    fontSize: number
}

export default function Brand(props: PropsTypes) {
    return (
        <span className="brand" style={{ fontSize: props.fontSize }}>
            High<span className="white-spot">Interior</span>
        </span>
    )
}
