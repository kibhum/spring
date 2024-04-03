"use client"
import React from 'react';
import Typography from '@mui/material/Typography';

const TypographyWithShadow = ({ children, color,sx,...props }) => {

  return (
    <Typography variant="h3"  {...props}>
      {children}
    </Typography>
  );
};

export default TypographyWithShadow;
