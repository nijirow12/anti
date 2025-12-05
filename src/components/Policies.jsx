import React from 'react';
import './Policies.css';

const policies = [
    {
        title: "政治改革",
        subtitle: "Political Reform",
        description: "国会改革、政治資金改革、党改革の「三位一体改革」を断行し、国民の信頼を取り戻す。",
        color: "#002147"
    },
    {
        title: "経済成長",
        subtitle: "Economic Growth",
        description: "賃上げと物価上昇に対応した税制改正を行い、国民の手取りを増やす経済構造へ。",
        color: "#00A86B"
    },
    {
        title: "環境・エネルギー",
        subtitle: "Environment & Energy",
        description: "カーボンニュートラルの実現とエネルギー自給率の向上を両立し、持続可能な社会を構築。",
        color: "#2E8B57"
    },
    {
        title: "外交・安全保障",
        subtitle: "Diplomacy & Defense",
        description: "日米同盟を基軸としつつ、防衛力の抜本的強化と装備品移転の円滑化で平和を守る。",
        color: "#4682B4"
    }
];

const Policies = () => {
    return (
        <section id="policies" className="section policies-section">
            <div className="container">
                <h2 className="section-title">Key Policies</h2>
                <div className="policies-grid">
                    {policies.map((policy, index) => (
                        <div key={index} className="policy-card">
                            <div className="policy-header" style={{ borderBottomColor: policy.color }}>
                                <h3 className="policy-title" style={{ color: policy.color }}>{policy.title}</h3>
                                <span className="policy-subtitle">{policy.subtitle}</span>
                            </div>
                            <p className="policy-desc">{policy.description}</p>
                            <a href="#" className="policy-link" style={{ color: policy.color }}>Read More &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Policies;
