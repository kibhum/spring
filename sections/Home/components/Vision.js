"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Vision() {
  return (
    <Card sx={{}}>
      <CardContent>
        <Typography variant='h3' gutterBottom>
          Vision
        </Typography>
        <Typography variant="h5" component="div">
          A spring of excellence
        </Typography>
      </CardContent>
    </Card>
  );
}