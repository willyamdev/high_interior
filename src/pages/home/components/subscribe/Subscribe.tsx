import React from 'react';
import ActionButton from '../../../global/components/action-button/ActionButton';
import './css/subscribe.css';

export default function Subscribe() {
    return (
        <div className="subscribe">
            <h1>Subscribe us for the latest news</h1>
            <p>We highly recommended to subscribe us for the latest news enter your email below.</p>
            <input placeholder="Email" spellCheck={false} type="text"/>
            <ActionButton>Subscribe</ActionButton>
        </div>
    )
}
