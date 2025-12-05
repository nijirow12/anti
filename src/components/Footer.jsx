import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Shinjiro Koizumi</h2>
                    <p>Official Website</p>
                </div>
                <div className="footer-social">
                    <a href="#" aria-label="Twitter">X (Twitter)</a>
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="YouTube">YouTube</a>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact</a>
                </div>
                <p className="copyright">&copy; 2025 Shinjiro Koizumi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
