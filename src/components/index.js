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
  let homeClassName = '';

  if(location.pathname === '/') {
    homeClassName = 'homepage';
  }

  return(
    <div className={`Header ${homeClassName}`}>
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
    <div className="">
      <Helmet
        title="David James - Front End Developer"
        meta={[
          {
            name: 'description',
            content: 'David James - Front End Web Developer - Melbourne',
          },
          {
            name: 'keywords',
            content:
              'David James, Melebounre, Front End Developer, gatsbyjs, gatsby, blog, frontend, reactjs, react, css, scss, sass',
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
