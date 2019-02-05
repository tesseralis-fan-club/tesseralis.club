import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the THIRD page</h1>
    <p>I lied.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
