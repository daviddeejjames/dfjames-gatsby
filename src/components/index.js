import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import '../scss/styles.scss'

const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Navigation = () => (
  <nav className="Navigation">
    <ul className="nav-list">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
    </ul>
  </nav>
)

const Header = () => {
  return(
    <div className="Header">
      <Link className="logo-link" to="/">
        <div className="diamond" />
        <div className="name">David James</div>
      </Link>
      <Navigation />
    </div>
  );
}

const TemplateWrapper = ({ children }) => {

  return (
    <div className={children.props.className == 'front-page' ? 'homepage' : null}>
      <Helmet
        title="David James - Software Developer"
        meta={[
          {
            name: 'description',
            content: 'David James - Software Developer - Melbourne',
          },
          {
            name: 'keywords',
            content:
              'David James, Melebounre, Front End Developer, Software Developer, Full Stack Developer, gatsbyjs, gatsby, blog, frontend, reactjs, react, css, scss, sass',
          },
        ]}
      />
      <Header />
      <div className="content-container">{children}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
