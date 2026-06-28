import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Paper,
  useTheme
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ExperienceItem({title, company, location, dates, workLength, tasks, img, skills}) {
    const theme = useTheme();
    const [imgError, setImgError] = useState(false);

    const handleImgError = () => {
        setImgError(true);
    };

    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Paper elevation={0} sx={{
        display: 'flex',
        gap: '24px',
        padding: '24px',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: isDarkMode
            ? '0 4px 12px rgba(255, 255, 255, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.08)',
          borderColor: isDarkMode ? '#444' : '#d0d0d0'
        }
      }}>
            <Box sx={{ flexShrink: 0 }}>
                {!imgError ? (
                    <Avatar
                        src={img}
                        alt={title}
                        sx={{ width: 80, height: 80 }}
                        onError={handleImgError}
                    />
                ) : (
                    <Avatar sx={{ width: 80, height: 80 }}>
                        {title.charAt(0)}
                    </Avatar>
                )}
            </Box>
      <Box sx={{ flex: 1 }}>
        {/* Header */}
        <Box sx={{ marginBottom: '12px' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              marginBottom: '4px'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: '#1976d2',
              marginBottom: '8px'
            }}
          >
            {company}
          </Typography>
        </Box>

        {/* Meta info */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '16px',
            fontSize: '0.9rem',
            color: theme.palette.text.secondary
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <LocationOnIcon sx={{ fontSize: '1rem' }} />
            <span>{location}</span>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
            <span>{dates}</span>
          </Box>
          <Box sx={{ color: isDarkMode ? '#888' : '#999', fontStyle: 'italic' }}>
            {workLength}
          </Box>
        </Box>

        {/* Tasks */}
        {tasks && tasks.length > 0 && (
          <Box sx={{ marginBottom: '16px' }}>
            <ul
              style={{
                margin: '0 0 0 20px',
                padding: 0,
                color: theme.palette.text.secondary,
                lineHeight: '1.6'
              }}
            >
              {tasks.map((task, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>
                  {task}
                </li>
              ))}
            </ul>
          </Box>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: isDarkMode ? '#2a2a2a' : '#f0f0f0',
                  color: '#1976d2',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#333' : '#e8e8e8'
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Paper>
    );
}