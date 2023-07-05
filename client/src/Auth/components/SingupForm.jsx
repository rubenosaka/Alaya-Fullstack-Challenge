import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleMenu}>
        <List>
          <ListItem button>
            <HomeIcon />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <FormatListBulletedIcon />
            <ListItemText primary="Post List" />
          </ListItem>
          <ListItem button>
            <AddIcon />
            <ListItemText primary="Create New Post" />
          </ListItem>
          <Divider />
          <ListItem button>
            <LoginIcon />
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button>
            <PersonAddIcon />
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
