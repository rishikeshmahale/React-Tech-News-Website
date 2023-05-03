import React from 'react';
import { Box , CircularProgress } from '@mui/material';

const LoadingAnimation = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: '67vh' }}>
      <CircularProgress color="secondary"/>
    </Box>
  );
}

export default LoadingAnimation;