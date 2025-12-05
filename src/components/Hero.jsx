import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    <span className="block-reveal">決断。</span>
                    <span className="block-reveal delay-1">実行。</span>
                    <span className="block-reveal delay-2">未来へ。</span>
                </h1>
                <p className="hero-subtitle fade-in delay-3">Shinjiro Koizumi Official Website</p>
                <div className="hero-actions fade-in delay-3">
                    <a href="#policies" className="btn">View Policies</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
