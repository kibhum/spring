"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Mission() {
  return (
    <Card>
      <CardContent>
        <Typography variant='h3' gutterBottom>
          Mission
        </Typography>
        <Typography variant="h5" sx={{textTransform:"uppercase"}}>
          to offer training, mentorship and development of strong character amongst young people guided by christian values of love, diligence and compassion
        </Typography>
      </CardContent>
    </Card>
  );
}