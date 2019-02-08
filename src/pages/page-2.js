import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>This is the end. There is no more.</p>
    <Link to="/">Click here to go back to the homepage</Link>
  </Layout>
)

export default SecondPage
