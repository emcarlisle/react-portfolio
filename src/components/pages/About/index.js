import React, { Component } from "react";
import websitePic from "../About/website-photo.jpeg";
import roseBackground from "./rose-background.jpg";
import Resume from "./emilyresume08082020.pdf";

class About extends Component {
  handleClick(e) {
    e.preventDefault();
    window.open(Resume)
  }
  render() {
    return (
      <main className="container-fluid-about" id="home-pg">
        <section id="about-me-section" className="about-page" style={{ backgroundImage: `url(${roseBackground})` }}>
          <img
            src={websitePic}
            id="website-photo"
            className="image"
            alt="Photo By: K-9"
          />
  
          <h1 className="header">Get to Know Me</h1>
          <p className="text-break" id="bio">
            I've always sought out opportunities and challenges that make a difference to me. Before this career field, I was a chef for different restaurants. Eventually, I came to a standstill and realized that my knowledge grew, but I would learn and master the craft fairly quickly, which led me to a different path. As a web developer, my passion for learning and solving problems are endless. I enjoy tackling new challenges and finding more that are waiting for me. With an explicit attention to detail, my passion for individual creativity, and the goal-oriented work ethic, I'm able to step my foot into a world that never stops evolving.
          </p>
          <button type="button" role="button" className="resume-btn" onClick={this.handleClick}>See Resume</button>
        </section>
      </main>
    );

  }
}

// change styles into classnames and then include into css
export default About;