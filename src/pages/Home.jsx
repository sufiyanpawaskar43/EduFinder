import React, { useState, useEffect } from "react";
import "./Home.css";

const posters = [
  "https://img.freepik.com/free-vector/online-education-concept-illustration_114360-5711.jpg",
  "https://img.freepik.com/free-vector/university-campus-concept-illustration_114360-15729.jpg",
  "https://img.freepik.com/free-vector/graduation-concept-illustration_114360-12216.jpg",
  "https://img.freepik.com/free-vector/students-study-graduation_23-2148481201.jpg",
];

const Home = () => {
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>EduFinder</span>
          </h1>
          <p className="hero-para">
            Your trusted guide to India’s top educational institutions.
            Explore, compare, and choose the best path for your future 🚀
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={posters[currentPoster]} alt="Education Banner" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EduFinder?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-university"></i>
            <h3>Top Institutes</h3>
            <p>
              Discover the best colleges, universities, and learning centers
              across India.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Verified Reviews</h3>
            <p>
              Read real feedback from students to make the right educational
              choice.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Career Guidance</h3>
            <p>
              Find courses that align with your career goals and aspirations.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-globe"></i>
            <h3>Pan-India Coverage</h3>
            <p>
              Explore institutes from metro cities to tier-2 towns — all in one
              place.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h2>500+</h2>
          <p>Colleges Listed</p>
        </div>
        <div className="stat">
          <h2>50k+</h2>
          <p>Students Guided</p>
        </div>
        <div className="stat">
          <h2>100+</h2>
          <p>Career Paths</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              “EduFinder helped me choose the right MBA college with honest
              reviews. Super easy to use!”
            </p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="testimonial">
            <p>
              “I found my dream engineering college here. Loved the detailed
              information and ratings.”
            </p>
            <h4>- Rohan Verma</h4>
          </div>
          <div className="testimonial">
            <p>
              “Great platform! Saves time and gives clarity for students and
              parents.”
            </p>
            <h4>- Ananya Gupta</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Find Your Perfect College?</h2>
        <p>
          Join thousands of students who trust EduFinder for their educational
          journey.
        </p>
        <button className="btn-secondary">Start Exploring</button>
      </section>
    </>
  );
};

export default Home;
