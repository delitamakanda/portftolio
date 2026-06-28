import React from 'react';
import ExperienceItem from './ExperienceItem';
import {
  Box
} from '@mui/material';

export default function ExperienceList({jobs}) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            {jobs.map((job, idx) => (
                <ExperienceItem key={idx} {...job} />
            ))}
        </Box>
    );
}
