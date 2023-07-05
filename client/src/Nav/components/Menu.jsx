import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon, text, to }) => {
  return (
    <ListItem button component={Link} to={to}>
      {icon}
      <ListItemText primary={text} primaryTypographyProps={{ sx: { color: 'grey.600', marginLeft: '8px' } }} />
    </ListItem>
  );
};

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleMenu} sx={{ color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            minWidth: '250px'
          }
        }}
      >
        <List>
          <ListItem sx={{ color: 'grey.600', justifyContent: 'space-between' }}>
            <ListItemText/>
            <IconButton onClick={toggleMenu}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          
          <MenuItem icon={<HomeIcon />} text="Home" to="/" />
          <MenuItem icon={<FormatListBulletedIcon />} text="Post List" to="/posts" />
          <MenuItem icon={<AddIcon />} text="Create New Post" to="/posts" />
          <Divider />
          <MenuItem icon={<LoginIcon />} text="Login" to="/login" />
          <MenuItem icon={<PersonAddIcon />} text="Register" to="/register" />
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
