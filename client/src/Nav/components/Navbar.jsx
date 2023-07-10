import { Toolbar, AppBar, Typography } from '@mui/material';
import { useMatch, Link } from 'react-router-dom';
import Menu from './Menu';
import ProfileButton from './ProfileButton';
import { getLinkText } from '../../util/helpers';

function Navbar({ activeSection }) {
  const path = useMatch(activeSection);

  return (
    <AppBar position="static" className="text-white">
      <Toolbar>
        <Menu />       
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href={path.pathname} className="text-white">
            Alaya Full Stack Challange | {getLinkText(path)}
          </Link>
        </Typography>
        <ProfileButton />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;