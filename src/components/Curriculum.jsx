import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle } from 'lucide-react';
import '../styles/Curriculum.css';

const modules = [
    {
        title: "Module 1: Calculus for Engineers",
        lessons: ["Limits and Continuity", "Derivatives and Rates of Change", "Integrals and Applications", "Multivariable Calculus"]
    },
    {
        title: "Module 2: Linear Algebra",
        lessons: ["Vectors and Matrices", "Systems of Linear Equations", "Eigenvalues and Eigenvectors", "Linear Transformations"]
    },
    {
        title: "Module 3: Differential Equations",
        lessons: ["First-Order Differential Equations", "Second-Order Linear Equations", "Laplace Transforms", "Systems of ODEs"]
    },
    {
        title: "Module 4: Probability & Statistics",
        lessons: ["Probability Theory", "Random Variables", "Statistical Inference", "Regression Analysis"]
    }
];

const Curriculum = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="curriculum" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Course <span className="text-gradient">Curriculum</span></h2>
                    <p>A comprehensive roadmap to mastering engineering mathematics.</p>
                </div>

                <div className="curriculum-container">
                    {modules.map((module, index) => (
                        <div key={index} className={`module-item ${openIndex === index ? 'active' : ''}`}>
                            <button
                                className="module-header"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <div className="module-title">
                                    <BookOpen size={20} className="module-icon" />
                                    <span>{module.title}</span>
                                </div>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            <div className="module-content" style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
                                <ul className="lesson-list">
                                    {module.lessons.map((lesson, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} className="check-icon" />
                                            {lesson}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
