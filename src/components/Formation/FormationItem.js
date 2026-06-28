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

export default function FormationItem({ img, school, study, dates }) {
  const [imageError, setImageError] = useState(false);
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