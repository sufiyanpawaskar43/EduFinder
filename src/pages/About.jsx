import React, { useEffect } from "react";
import "./About.css";
import sufiyan from '../images/profile photo.jpg'
import suhana from '../images/suhana.png'
import Jagruti from '../images/jagruti.png'


const About = () => {
  // Counter animation
  const animateCounter = (id, target) => {
    let count = 0;
    const speed = target / 100;
    const element = document.getElementById(id);
    const update = setInterval(() => {
      count += Math.ceil(speed);
      if (count >= target) {
        element.innerText = target;
        clearInterval(update);
      } else {
        element.innerText = count;
      }
    }, 30);
  };

  useEffect(() => {
    animateCounter("clients", 5000);
    animateCounter("projects", 1200);
    animateCounter("reviews", 3000);
    animateCounter("partners", 450);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="earth"></div>
        <h1>Discover EduFinder 🌱</h1>
        <p>Helping India choose the best educational path for a brighter tomorrow.</p>
      </section>

      {/* About Section */}
      <div className="about-container">
        <h2>Who We Are</h2>
        <p>
          EduFinder is India’s most trusted platform for discovering top educational institutions — 
          from engineering and medical colleges to coaching centers and online learning hubs. 
          We connect students with verified, updated, and transparent information to help them 
          make the right educational choices. Our mission is to empower every learner with the 
          resources they need to build their dream future.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat">
          <h3 id="clients">0</h3>
          <p>Happy Students</p>
        </div>
        <div className="stat">
          <h3 id="projects">0</h3>
          <p>Institutes Listed</p>
        </div>
        <div className="stat">
          <h3 id="reviews">0</h3>
          <p>Student Reviews</p>
        </div>
        <div className="stat">
          <h3 id="partners">0</h3>
          <p>Partner Institutes</p>
        </div>
      </div>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
       <div className="member">
          <img src={sufiyan} alt="Sufiyan Pawaskar" />
          <h4>Sufiyan Pawaskar</h4>
          <p>CEO & Founder</p>
        </div>

        <div className="member">
          <img src={suhana} alt="Suhana Solkar" />
          <h4>Suhana Solkar</h4>
          <p>Head of Operations</p>
        </div>

        <div className="member">
          <img src={Jagruti} alt="Jagruti Gosawe" />
          <h4>Jagruti Gosawe</h4>
          <p>Lead Developer</p>
        </div>

        </div>
      </section>

    </>
  );
};

export default About;
