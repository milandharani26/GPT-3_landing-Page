import React from 'react';
import './plan.css';

const plans = [
    {
        name: "Starter",
        price: "₹4500",
        description: "Perfect for individuals and small projects",
        features: ["1 office", "5GB storage", "max staff size 90 employees"],
        recommended: false,
    },
    {
        name: "Pro",
        price: "₹5000",
        description: "Ideal for growing teams and businesses",
        features: [
            "5 users",
            "Unlimited projects",
            "50GB storage",
            "Priority support",
            "max staff size 100 employees"
        ],
        recommended: false,
    },
    {
        name: "Enterprise",
        price: "₹10000",
        description: "Tailored solutions for large organizations",
        features: [
            "Unlimited users",
            "Unlimited projects",
            "Unlimited storage",
            "24/7 dedicated support",
            "Custom integrations",
            "max staff size 100 employees",
        ],
        recommended: false,
    },
];

export default function Plans() {
    return (
        <div className="subscription-plans">
            <div className="plans-container">
                {plans.map((plan) => (
                    <div className={`plan-card ${plan.recommended ? 'recommended' : ''}`} key={plan.name}>

                        <div>
                            <div className="plan-header">
                                <h4 className="plan-name">{plan.name}</h4>
                                {plan.recommended && (
                                    <span className="recommended-badge">Recommended</span>
                                )}
                            </div>
                            <p className="plan-description">{plan.description}</p>
                            <h3 className="plan-price">
                                {/* {plan.price} */}
                                <span className="price-period">{plan.price}/month</span>
                            </h3>
                            <ul className="feature-list">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="feature-item">
                                        <span className="feature-icon">✔️</span>
                                        <p className='gradient__text'>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="plan-actions">
                            <button
                                className={`choose-plan-btn ${plan.recommended ? 'highlight' : ''}`}
                            >
                                {plan.recommended ? '⚡ Choose Plan' : 'Choose Plan'}
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
