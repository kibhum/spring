import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CoreValues from './components/CoreValues';
import Vision from './components/Vision';
import Mission from './components/Mission';


export default function Home() {
  return (
    <Box sx={{ width: '100%',display:"flex" }} >
      <Stack spacing={2}>
      <Vision/>
      <Mission/>
      <CoreValues/>
      </Stack>
    </Box>
  );
}