import React from 'react';
import './About.css';
import aboutImage from '../assets/about.jpg';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products
            and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo a dui lacinia ultricies
            vitae at ligula. Mauris tristique auctor dui, sed rutrum dolor convallis non. Nunc nec libero id tellus dictum
            vestibulum.
          </p>
          <p>
            Vestibulum dapibus, eros vel pulvinar tempus, est odio facilisis purus, eget congue nunc sem vitae dolor.
            Aliquam feugiat sollicitudin lacus. Duis auctor pellentesque odio, ut finibus tortor hendrerit sit amet.
            Curabitur blandit consequat nisl a ultrices. Nullam nec dui vel lectus suscipit scelerisque.
          </p>
          <p>
            Phasellus quis lorem eget neque posuere dictum. Curabitur et est faucibus, dignissim nisi ac, dapibus turpis.
            Sed nec est at lorem interdum tristique. Nam lacinia sem id purus ullamcorper dignissim. Nam vestibulum
            ultricies mi vitae dignissim. Aliquam erat volutpat. In vitae nibh id mi pellentesque luctus non vel risus.
            Fusce non purus at felis auctor rutrum.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

