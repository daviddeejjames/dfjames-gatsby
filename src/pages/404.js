import React from 'react'
import Footer from '../components/footer'

import TemplateWrapper from '../components/index.js'

const NotFoundPage = () => (
  <TemplateWrapper>
    <div className="four-oh-four-page page-wrap">
      <h1 className="page-title">404</h1>
      <div className="page-content">
        <p>You just hit a route that doesn&#39;t exist... the sadness :</p>
      </div>
      <Footer />
    </div>
  </TemplateWrapper>
)

export default NotFoundPage
