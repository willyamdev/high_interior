import React from 'react';
import Brand from '../brand/Brand';
import './css/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <div className="footer">
            <div className="infos flex-item">
                <Brand fontSize={30} />
                <span>We make your interior from impossible to reality.</span>
                <div className="social-networks">
                    <FontAwesomeIcon icon={faFacebook} className="snIcons" />
                    <FontAwesomeIcon icon={faInstagram} className="snIcons" />
                    <FontAwesomeIcon icon={faTwitter} className="snIcons" />
                </div>
            </div>
            <div className="useful-links flex-item">
                <span className="footer-links-title">Useful Links</span>
                <span className="footer-links">About</span>
                <span className="footer-links">Features</span>
                <span className="footer-links">Gallery</span>
                <span className="footer-links">Career</span>
            </div>
            <div className="company flex-item">
                <span className="footer-links-title">Company</span>
                <span className="footer-links">Team</span>
                <span className="footer-links">Blog</span>
                <span className="footer-links">FAQ</span>
            </div>
            <div className="support flex-item">
                <span className="footer-links-title">Support</span>
                <span className="footer-links">Contact</span>
            </div>
        </div>
    )
}
