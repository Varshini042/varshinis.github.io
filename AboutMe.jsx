import React from "react";
import "./styles.css";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-left">
          <div className="about-card">
            <FaUser className="about-icon" />
            <h3>Who I Am</h3>
            <p>
              I'm a passionate data professional with expertise in analytics, business intelligence, and data engineering.
              I specialize in transforming raw data into actionable insights that drive business decisions.
            </p>
          </div>
          <div className="about-card">
            <FaGraduationCap className="about-icon" />
            <h3>Education</h3>
            <p>
              I hold a Master's degree in Data Science with a focus on advanced analytics and machine learning techniques.
              My technical foundation is complemented by continuous learning in emerging data technologies.
            </p>
          </div>
          <div className="about-card">
            <FaBriefcase className="about-icon" />
            <h3>Experience</h3>
            <p>
              With experience across various industries, I've developed expertise in data pipeline development,
              BI dashboard creation, and analytical reporting. I've helped organizations leverage their data assets to gain competitive advantages.
            </p>
          </div>
        </div>
        <div className="about-right">
          <h3>My Approach to Data</h3>
          <p>
            I believe that effective data work is about more than just technical skills—it's about understanding business needs,
            asking the right questions, and communicating insights in a way that drives action.
          </p>
          <p>
            My approach combines technical rigor with business acumen to deliver solutions that create real value.
            I focus on building scalable, maintainable data systems that evolve with your organization's needs.
          </p>
          <p>
            Whether I'm building ETL pipelines, creating interactive dashboards, or performing complex analyses,
            my goal remains the same: to help you harness the power of your data.
          </p>
          <div className="skills-tags">
            <span className="skill-tag">Data Analytics</span>
            <span className="skill-tag">Business Intelligence</span>
            <span className="skill-tag">Data Engineering</span>
            <span className="skill-tag">Data Visualization</span>
            <span className="skill-tag">ML Integration</span>
            <span className="skill-tag">Data Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
