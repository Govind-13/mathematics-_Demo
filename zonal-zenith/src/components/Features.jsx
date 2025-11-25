import React from 'react';
import { Brain, Target, Globe, Zap } from 'lucide-react';
import '../styles/Features.css';

const features = [
    {
        icon: <Brain size={32} />,
        title: "Visual Learning",
        description: "Understand complex concepts through interactive 3D graphs and animations."
    },
    {
        icon: <Target size={32} />,
        title: "Problem Solving",
        description: "Master step-by-step problem solving techniques used in real engineering challenges."
    },
    {
        icon: <Globe size={32} />,
        title: "Real-world Applications",
        description: "See how calculus and algebra apply to robotics, structural analysis, and circuits."
    },
    {
        icon: <Zap size={32} />,
        title: "Instant Feedback",
        description: "Practice with AI-powered quizzes that give you immediate, personalized feedback."
    }
];

const Features = () => {
    return (
        <section id="features" className="section-padding features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose <span className="text-gradient">EngMath?</span></h2>
                    <p>We bridge the gap between abstract theory and practical engineering application.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
