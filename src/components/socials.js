import React from 'react'

import {
  FaGithub,
  FaCodepen,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

const Socials = () => {
  const github = 'https://github.com/daviddeejjames'
  const linkedin = 'https://au.linkedin.com/in/david-james-614521106'
  const codepen = 'https://codepen.io/daviddeejjames'
  const twitter = 'https://twitter.com/daviddeejjames'
  const mailto = 'mailto:davidj28827@gmail.com'

  return (
    <div className="Socials">
      <ul className="social-icons">
        <li>
          <a href={github} target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank">
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
