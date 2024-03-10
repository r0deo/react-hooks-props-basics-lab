// Links.js
import React from 'react';

const Links = ({ githubLink, linkedinLink }) => {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default Links;
