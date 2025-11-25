import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="badge">New Course 2025</div>
                    <h1>Master Engineering <span className="text-gradient">Mathematics</span></h1>
                    <p>
                        The foundation of all engineering innovation. Learn Calculus, Linear Algebra,
                        and Differential Equations with interactive visualizations and real-world examples.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            Start Learning <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn btn-outline">
                            View Syllabus <PlayCircle size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <h3>10k+</h3>
                            <span>Students</span>
                        </div>
                        <div className="stat">
                            <h3>500+</h3>
                            <span>Lessons</span>
                        </div>
                        <div className="stat">
                            <h3>4.9/5</h3>
                            <span>Rating</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Abstract 3D Math Visual */}
                    <div className="math-grid">
                        <div className="grid-plane"></div>
                        <div className="floating-shape cube"></div>
                        <div className="floating-shape sphere"></div>
                        <div className="floating-shape pyramid"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
