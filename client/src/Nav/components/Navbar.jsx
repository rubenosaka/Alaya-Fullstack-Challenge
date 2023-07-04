import React from 'react';
import { Toolbar, AppBar, Typography, Link } from '@mui/material'

function Navbar({ activeSection }) {
  const getLinkText = (section) => {
    switch (section) {
      case '':
        return 'Home';
      case 'register':
        return 'Register';
      case 'posts':
        return 'Posts';
      default:
        return '';
    }
  };

  const getLinkPath = (section) => {
    switch (section) {
      case '':
        return '/';
      case 'register':
        return '/register';
      case 'posts':
        return '/posts';
      default:
        return '/';
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          <Link href={getLinkPath(activeSection)} className="text-white">
            {getLinkText(activeSection)}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;