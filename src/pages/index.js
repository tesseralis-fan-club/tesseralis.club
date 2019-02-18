import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Official @tesseralis fan site</h1>
    <p>Welcome to the official tesseralis fan club.</p>
    <p>Here you can praise the beautiful, talented genius that is tesseralis</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
)

export default IndexPage
