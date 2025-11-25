import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Mechanical Engineering Student",
        content: "This course saved my GPA. The visual explanations made calculus click for me in a way my professors never could.",
        rating: 5
    },
    {
        name: "Sarah Lee",
        role: "Civil Engineer",
        content: "I use the linear algebra concepts I learned here in my daily work. Highly practical and well-structured.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Computer Science Major",
        content: "The probability module is a masterpiece. It helped me understand machine learning algorithms so much better.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2>Student <span className="text-gradient">Success Stories</span></h2>
                    <p>Join thousands of engineers who have mastered mathematics with us.</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
