import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="navbartext">
            ToDo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}