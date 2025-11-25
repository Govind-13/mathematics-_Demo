import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Features />
            <Curriculum />
            <Testimonials />
            <section className="section-padding" style={{ textAlign: 'center', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Ace Your Exams?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Join the course today and get lifetime access to all materials.</p>
                    <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Enroll Now</button>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
