import React from 'react';
import './News.css';

const newsItems = [
    {
        date: '2025.12.01',
        category: 'Activity',
        title: '横須賀基地を視察し、隊員を激励しました。',
        link: '#'
    },
    {
        date: '2025.11.28',
        category: 'Diet',
        title: '衆議院予算委員会にて、防衛予算に関する答弁を行いました。',
        link: '#'
    },
    {
        date: '2025.11.20',
        category: 'Diplomacy',
        title: '米国防長官と会談し、日米同盟の更なる強化を確認しました。',
        link: '#'
    }
];

const News = () => {
    return (
        <section id="news" className="section news-section">
            <div className="container">
                <h2 className="section-title">Latest News</h2>
                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <article key={index} className="news-item">
                            <div className="news-meta">
                                <time className="news-date">{item.date}</time>
                                <span className="news-category">{item.category}</span>
                            </div>
                            <h3 className="news-title">
                                <a href={item.link}>{item.title}</a>
                            </h3>
                        </article>
                    ))}
                </div>
                <div className="news-more">
                    <a href="#" className="btn btn-secondary">View All News</a>
                </div>
            </div>
        </section>
    );
};

export default News;
