import React from'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ProfileCard from '@site/src/components/ProfileCard';


import { Avatar, Box } from '@mui/material';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const profileDetails = {
  name: 'Delita Makanda',
  githubUrl: 'https://github.com/delitamakanda',
  linkedinUrl: 'https://www.linkedin.com/in/delitamakanda/',
  jobTitle: 'Développeuse Angular senior',
  photoUrl: 'https://media.licdn.com/dms/image/v2/C4D03AQF55Cc_jwULMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1611691108939?e=2147483647&v=beta&t=TCPS3kQlSFpRj6Oz3MZSveAqm9RMAqsJclR6FQMWkL8'
};


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`Blog of ${siteConfig.title}`}>
      <ProfileCard {...profileDetails} />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
