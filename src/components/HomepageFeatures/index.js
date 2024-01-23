import React, { useState, useEffect } from'react';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { EXPERIENCES, EDUCATION } from '../../utils/data';
import { Chip } from '@mui/material';

const TackStacks = ({ stack }) => {
  return (
    <>
      {stack.map((item, index) => (
        <Chip key={index} label={item} style={{ marginRight: 5 }} />
      ))}
    </>
  )
}

const MainTabs = () => {
  const [repos, setRepos] = useState([]);

  const formatPrettyDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  useEffect(() => {
    fetch('https://api.github.com/users/delitamakanda/repos')
   .then(async(res) => await res.json())
   .then((data) => {
        setRepos(data.filter((item) => item.archived === false).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
      })
      
     .catch((err) => console.log(err));
  }, []);
  return (
    <Tabs>
      <TabItem to='/projects' value="PROJETS" default>
        <h2>Projets</h2>
        {repos.map((item, index) => (
          <div key={index} className={styles.project}>
            <h3><a href={item.html_url} target='_blank'>{item.name}</a></h3>
            <p>{item.description}</p>
            <p>{formatPrettyDate(item.created_at)}</p>
            <p>{formatPrettyDate(item.updated_at)}</p>
            <p>{ item.topics && <TackStacks stack={item.topics} />}</p>
            </div>
        ))}
      </TabItem>
      <TabItem value="CURRICULUM VITAE" to='/resume'>
        <h2>Curriculum vitae</h2>
        {EXPERIENCES.map((item, index) => (
          <div key={index} className={styles.experience}>
            {item.img && <img src={item.img} alt={item.title} />}
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <p>{item.location}</p>
            <p>{item.dates}</p>
            <p>{item.workLength}</p>
            {item.tasks && <TackStacks stack={item.tasks} />}
          </div>
        ))}

        {EDUCATION.map((item, index) => (
          <div key={index} className={styles.experience}>
            {item.img && <img src={item.img} alt={item.school} />}
            <h3>{item.school}</h3>
            <h4>{item.study}</h4>
            <p>{item.dates}</p>
          </div>
        ))}
      </TabItem>
    </Tabs>
  )
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--offset-4 col--8'>
            <MainTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
