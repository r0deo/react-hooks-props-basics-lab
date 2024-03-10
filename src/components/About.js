// About.js
import React from 'react';
import Links from './Links';

const About = ({ bio, links }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>}
      <Links githubLink={links.github} linkedinLink={links.linkedin} />
    </div>
  );
}

export default About;
