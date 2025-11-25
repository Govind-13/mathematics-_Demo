import React from 'react';
import { Calculator, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Calculator size={24} color="#3b82f6" />
                            <span>Eng<span className="highlight">Math</span></span>
                        </div>
                        <p>Empowering the next generation of engineers with solid mathematical foundations.</p>
                        <div className="social-links">
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Github size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Course</h4>
                            <a href="#">Curriculum</a>
                            <a href="#">Pricing</a>
                            <a href="#">Instructors</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="link-column">
                            <h4>Resources</h4>
                            <a href="#">Blog</a>
                            <a href="#">Cheatsheets</a>
                            <a href="#">Calculators</a>
                            <a href="#">Community</a>
                        </div>
                        <div className="link-column">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 EngMath. All rights reserved.</p>
                    <div className="contact-email">
                        <Mail size={16} />
                        <span>support@engmath.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
