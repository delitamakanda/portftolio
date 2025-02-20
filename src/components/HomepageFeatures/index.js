import React, { useState, useEffect } from'react';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { EXPERIENCES, EDUCATION } from '../../utils/data';
import { Chip, CircularProgress } from '@mui/material';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const resumeStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: 15,
    },
    container: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      margin: 15,
    },
    content: {
      flexDirection: 'column',
      display: 'flex',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    imgContainer: {
      height: 56,
      width: 56,
      float: 'left',
      position: 'relative',
    },
    img: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxSizing: 'border-box',
      backgroundClip: 'content-box',
      border: '4px solid transparent',
      borderRadius: '6px',
    },
    companyContainer: {
      flex: '1 0',
      width: 'auto',
      marginLeft: '80px',
      overflow: 'hidden',
      marginBottom: 8,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 0,
      marginTop: 0,
    },
    company: {
      display: 'inline',
      fontSize: 13,
    },
    flex: {
      display: 'flex',
    },
    date: {
      fontSize: 10,
      marginTop: 0,
      marginBottom: 0,
    },
    city: {
      marginLeft: 80,
      fontSize: 10,
    },
    information: {
      fontSize: 14,
    },
  }),
);

export const TackStacks = ({ stack }) => {
  return (
    <>
      {stack.map((item, index) => (
        <Chip key={index} label={item} color="secondary" style={{ marginRight: 5, marginTop: 5 }} />
      ))}
    </>
  )
}

export const Project = (props) => {
  const { topics, name, description, html_url, homepage } = props;
  return (
    <section style={{ flexDirection: 'row', margin: 20, marginLeft: 0, display: 'flex'}}>
    
      <div style={{ flex: '2 1'}}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <span style={{ flex: '2 0', fontWeight: 800, fontSize: 18 }}>{name}</span>
        </div>
        <span style={{ fontSize: 14}}>{description}</span>
        <div style={{ display: 'flex'}}>
          <a href={html_url} target='_blank' style={{ marginLeft: '-.7rem', marginRight: '.7rem', padding: '.5rem .7rem'}}>Code</a>
          { homepage && <a href={homepage} target='_blank' style={{ marginLeft: '.7rem', marginRight: '.7rem', padding: '.5rem.7rem'}}>Site</a> }
        </div>
        { topics && <TackStacks stack={topics} />}
      </div>
    </section>
  )
}

export const Education = (props) => {
  const { img, school, study, dates } = props;
  const classes = resumeStyles();
  
  return (
    <section>
      <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.fullWidth}>
          <div className={classes.imgContainer}>
            {img && <img src={img} alt={school} className={classes.img} />}
          </div>
          <div className={classes.companyContainer}>
            <h3 className={classes.jobTitle}>{school}</h3>
            <span className={classes.company}>{study}</span>
            <div className={classes.flex}>
              <h4 className={classes.date}>
                <span>{ dates }</span>
              </h4>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const MainTabs = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = resumeStyles();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/users/delitamakanda/repos', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': siteConfig.customFields.GH_TOKEN
      },
    })
   .then(async(res) => await res.json())
   .then((data) => {
        setRepos(data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
        setIsLoading(false);
      })
      
     .catch((err) => {console.log(err); setIsLoading(false)});
  }, []);
  return (
    <Tabs>
      <TabItem key="'projects'" to='/projects' value="PROJETS"  default>
        <h2>Projets</h2>
        {isLoading && <CircularProgress color='secondary' />}
        {!isLoading && repos && repos.map((item) => (
          <Project  key={item.id.toString()} {...item} />
        ))}
      </TabItem>
      <TabItem key="'resume'" value="CURRICULUM VITAE" to='/resume' >
        <h2>Curriculum vitae</h2>
        {EXPERIENCES.map(({title, company, location, dates, workLength, tasks, img, skills}, idx) => (
          <div key={idx} className={styles.experience}>
            <section>
      <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.fullWidth}>
          <div className={classes.imgContainer}>
            {img && <img src={img} alt={title} className={classes.img} />}
          </div>
          <div className={classes.companyContainer}>
            <h3 className={classes.jobTitle}>{title}</h3>
            <span className={classes.company}>{company}</span>
            <div className={classes.flex}>
              <h4 className={classes.date}>
                <span>{dates} {workLength && (
                  <>
                  •
                  </>
                )}</span>
              </h4>
              <h4 className={classes.date}>
                <span>{ workLength }</span>
              </h4>
            </div>
            <div style={{ display: 'block', fontSize: 10}}>
              <span>{location}</span>
            </div>
          </div>
          </div>
          <div className={classes.city}>
            <p className={classes.information}>
              {tasks && tasks.map(task => {
                return (
                  <>
                    • {task} <br />
                  </>
                )
              })}
            </p>
        {skills && <TackStacks stack={skills} />}
          </div>
        </div>
      </div>
    </section>
          </div>
        ))}

        {EDUCATION.map((item) => (
          <Education key={item.id.toString()} {...item}  />
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
