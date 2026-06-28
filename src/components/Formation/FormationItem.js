import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  useTheme
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useColorMode } from '@docusaurus/theme-common';
const resumeStyles = makeStyles(() => ({
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
        fontSize: 13,
        marginLeft: 10,
    },
}));

export default function FormationItem({ img, school, study, dates }) {
  const [imageError, setImageError] = useState(false);
  const classes = resumeStyles();
  const handleImageError = (e) => {
    setImageError(true);
  };
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Paper elevation={0} sx={{
      display: 'flex',
      gap: 2,
      padding: '24px',
        backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
        border: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: isDarkMode
            ? '0 4px 12px rgba(255, 255, 255, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.08)',
          borderColor: isDarkMode ? '#444' : '#d0d0d0'
        }
    }}
    >
      <Box sx={{ flexShrink: 0}}>
            {!imageError ? (
              <Avatar src={img} alt={school} onError={handleImageError} sx={{ width: 75, height: 75, bgcolor: isDarkMode ? '#333' : '#e5e5e5', fontSize: 24 }} >
                <SchoolIcon fontSize="large" />
              </Avatar>
            ) : (
              <Avatar sx={{ width: 75, height: 75, bgcolor: isDarkMode ? '#333' : '#e5e5e5', fontSize: 24 }} >
                <SchoolIcon fontSize="large" />
              </Avatar>
            )}
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? '#fff' : '#000',
            marginBottom: '8px'
          }}
        >
          {school}
        </Typography>

        {/* Study */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: isDarkMode ? '#90caf9' : '#1976d2',
            marginBottom: '12px'
          }}
        >
          {study}
        </Typography>

         <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: isDarkMode ? '#bbb' : '#666'
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
          <span>{dates}</span>
        </Box>
      </Box>
    </Paper>
    )
}