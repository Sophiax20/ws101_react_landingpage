import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <section id="home" className="hero">
        <div className="hero-content">
            <h1>Why Web Development Matters</h1>
            <p>
                Web development is at the heart of the digital world. It powers the websites and applications we use every day and plays a crucial role in business success, personal branding, and accessibility.
            </p>
            <div className="hero-details">
                {[
                    { title: 'Accessibility', content: 'A well-developed website ensures that information and services are accessible to everyone, regardless of their device or capabilities.' },
                    { title: 'Building', content: 'Websites are the digital face of businesses. A strong, visually appealing, and user-friendly website helps build brand recognition and trust.' },
                    { title: 'Customer Engagement', content: 'Web development enables businesses to create interactive experiences, engage with customers, and gather valuable feedback.' },
                    { title: 'E-commerce', content: 'For businesses selling products or services online, a website is essential for reaching customers and facilitating transactions.' },
                    { title: 'Information Dissemination', content: 'Websites are a powerful tool for sharing information, educating the public, and promoting causes.' },
                    { title: 'Search Engine Optimization (SEO)', content: 'A well-developed website can be optimized to rank higher in search engine results, increasing visibility and attracting more visitors.' },
                    { title: 'Personal Branding', content: 'Individuals can use websites to showcase their skills, build personal brands, and network with potential employers or clients.' },
                    { title: 'Innovation', content: 'Web development is constantly evolving, enabling new and innovative ways to interact with users and deliver value.' },
                ].map((detail, index) => (
                    <div key={index} className="detail">
                        <h3>{detail.title}</h3>
                        <p>{detail.content}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
            </button>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="about">
        <h2>About Web Development</h2>
        <p>
            Web development is crucial for creating, designing, and maintaining websites. It encompasses a variety of skills and technologies, including HTML, CSS, and JavaScript. A strong web presence is essential for businesses, personal branding, and accessibility in the digital age.
        </p>
    </section>
);

const Contact = () => (
    <section className="contact">
        <h2>Contact Us</h2>
        <form>
            <label>Name:</label>
            <input type="text" required />
            <label>Email:</label>
            <input type="email" required />
            <label>Message:</label>
            <textarea required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
);


const App = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <footer>
                <p>&copy; 2024 | All Rights Reserved.</p>
            </footer>
        </Router>
    );
};

export default App;

