import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-image">
                    {/* Placeholder for portrait */}
                    <div className="portrait-placeholder"></div>
                </div>
                <div className="about-content">
                    <h2 className="section-title text-left">Profile</h2>
                    <h3 className="about-name">
                        小泉 進次郎
                        <span className="about-name-en">Shinjiro Koizumi</span>
                    </h3>
                    <p className="about-role">防衛大臣 / 衆議院議員</p>
                    <p className="about-text">
                        1981年4月14日生まれ。神奈川県横須賀市出身。<br />
                        関東学院大学経済学部卒業後、米国コロンビア大学大学院で政治学修士号を取得。<br />
                        米国戦略国際問題研究所（CSIS）研究員を経て、2009年に衆議院議員初当選。<br />
                        環境大臣、原子力防災担当大臣などを歴任し、現在は防衛大臣として日本の安全保障政策を牽引する。
                    </p>
                    <p className="about-text">
                        「決断と実行」を信条に、政治改革、経済再生、そして持続可能な社会の実現に向けて邁進する。
                    </p>
                    <div className="about-actions">
                        <a href="#" className="btn btn-secondary">詳細プロフィール</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
