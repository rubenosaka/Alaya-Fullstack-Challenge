import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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