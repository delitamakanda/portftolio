import React from 'react';
import FormationItem from './FormationItem';
import Box from '@mui/material/Box';

export default function FormationList({items}) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            {items.map((item) => (
                <FormationItem key={item.id.toString()} {...item} />
            ))}
        </Box>
    )
}