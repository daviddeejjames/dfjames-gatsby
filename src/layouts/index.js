import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../scss/styles.scss'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
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

const Header = () => (
  <div className="Header">
    <Link className="logo-link" to="/">
      <div className="diamond"></div>
      <div className="name">David James</div>
    </Link>
    <Navigation />
  </div>
)

const Footer = () => (
  <div className="Footer">

  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
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
    <div className="content-container">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
