import React from 'react'

import {
  FaGithub,
  FaCodepen,
  FaLinkedin,
} from 'react-icons/fa'

const Socials = () => {
  const github = 'https://github.com/daviddeejjames'
  const linkedin = 'https://au.linkedin.com/in/david-james-614521106'
  const codepen = 'https://codepen.io/daviddeejjames'

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
          <a href={linkedin} target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
