import React from'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Avatar, Box } from '@mui/material';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box m="auto">
            <Avatar alt={siteConfig.title} src={useBaseUrl('https://media.licdn.com/dms/image/C4D03AQF55Cc_jwULMQ/profile-displayphoto-shrink_200_200/0/1611691108939?e=2147483647&v=beta&t=mxVG9boqUXHCdih2ZAQEN_xRcOhKWiOfq_hRiOMp5JY')} sx={{ width: 150, height: 150, m: 2 }} />
          </Box>
        </Box>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`Blog of ${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
