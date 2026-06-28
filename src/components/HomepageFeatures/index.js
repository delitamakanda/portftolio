import React, { useState, useEffect } from'react';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { EXPERIENCES, EDUCATION } from '../../utils/data';
import { Chip, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqAgent from "../FaqAgent";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useColorMode } from '@docusaurus/theme-common';
import FormationList from '../Formation/FormationList';
import ExperienceList from '../Experience/ExperienceList';

const resumeStyles = makeStyles(() => ({
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
      height: 75,
      width: 75,
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

export const TackStacks = ({ stack, color }) => {
  return (
    <>
      {stack.map((item, index) => (
        <Chip key={index} label={item} color={color || "secondary"} style={{ marginRight: 5, marginTop: 5 }} />
      ))}
    </>
  )
}

export const Project = (props) => {
  const { id, stargazers_count, owner, name, description, html_url, language } = props;
  const getLanguageColor = (language) => {
     const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'Rust': '#dea584',
      'Dart': '#00B4AB',
      'Vue': '#2c3e50',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Shell': '#89e051',
      'Objective-C': '#438eff',
      'Scala': '#c22d40',
      'Perl': '#0298c3',
      'Haskell': '#5e5086',
      'Lua': '#000080',
      'R': '#198CE7',
      'Elixir': '#6e4a7e',
      'Clojure': '#db5855',
      'Erlang': '#B83998',
      'F#': '#b845fc',
      'Groovy': '#e69f56',
      'PowerShell': '#012456',
    };
    return colors[language] || '#ededed';
  }
  const formatStars = (stars) => {
    if (stars >= 1000) {
      return (stars / 1000).toFixed(1) + 'k';
    }
    return stars;
  }
  return (
    <ListItem disablePadding key={id} secondaryAction={
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Tooltip title="Stars">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ fontSize: 18, color: '#fbbf24' }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {formatStars(stargazers_count)}
            </Typography>
          </Box>
        </Tooltip>
        <Tooltip title="Open on GitHub">
          <IconButton
            edge="end"
            aria-label="open"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    }>
    
      <ListItemButton component="a" href={html_url} target="_blank" rel="noopener noreferrer" sx={{
        '&:hover': {
          bgcolor: 'action.hover',
        }
      }}>
        <ListItemAvatar>
          <Avatar alt={owner['login']} src={owner['avatar_url']} sx={{ width: 40, height: 40 }} />
        </ListItemAvatar>
        <ListItemText primary={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
            {language && (
        <Chip label={language} size="small" sx={{ bgcolor: getLanguageColor(language), color: '#fff', fontSize: 12, fontWeight: 600 }} />
        )}
          </Box>
        } secondary={
          <Box>
            <Typography component="span" variant="body2" color="text.primary" sx={{ display: 'block', mt: 0.5 }}>
              {description}
            </Typography>
            <Typography component="span" variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
              par {owner['login']}
            </Typography>
          </Box>
        }
        />
        </ListItemButton>
    </ListItem>
  )
}

export const MainTabs = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = resumeStyles();
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const theme = {
    palette: {
      text: {
        primary: colorMode === 'dark' ? '#fff' : '#000',
        secondary: colorMode === 'dark' ? '#aaa' : '#555',
      },
    },
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/users/delitamakanda/repos?sort=updated&per_page=99', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'Authorization': siteConfig.customFields.GH_TOKEN
      },
    })
   .then(async(res) => await res.json())
   .then((data) => {
        setRepos(data);
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
          <List sx={{ width: '100%', bgcolor: colorMode === 'dark' ? 'background.default' : 'background.paper'}} key={item.id.toString()}>
            <Project {...item} />
          </List>
        ))}
      </TabItem>
      <TabItem key="'resume'" value="CURRICULUM VITAE" to='/resume' >
        <h2>Curriculum vitae</h2>

        <Box sx={{ borderBottom: `1px solid ${colorMode === 'dark' ? '#333' : '#e5e5e5'}`, marginBottom: '40px' }}>
          <Tabs
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                color: colorMode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
                '&.Mui-selected': {
                  color: '#1976d2'
                }
              }
            }}
          >
            <TabItem value="Expériences" key="expériences" to="/experiences">
              <ExperienceList jobs={EXPERIENCES} />
            </TabItem>
            <TabItem value="Formations" key="formations" to="/formations">
              <FormationList items={EDUCATION}  />
            </TabItem>
          </Tabs>
        </Box>

      </TabItem>
        <TabItem key="'faq'" value="FAQ" to='/faq'>
        <FaqAgent />
      </TabItem>
    </Tabs>
  )
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--12'>
            <MainTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
