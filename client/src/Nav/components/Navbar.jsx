import { decodeAuthToken } from '../../Auth/Auth';
import { Toolbar, AppBar, Typography, Button } from '@mui/material';
import { useMatch, Link } from 'react-router-dom';
import Menu from './Menu';


function Navbar({ activeSection }) {
  const decodedToken = decodeAuthToken();
  const path = useMatch(activeSection);

  const getLinkText = (section) => {
    switch (section) {
      case '/':
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
      case '/':
        return '/';
      case 'register':
        return '/register';
      case 'posts':
        return '/posts';
      default:
        return '/';
    }
  };
  const rightButton = decodedToken && decodedToken.userName ? <Button color="inherit">Wellcome {decodedToken.userName}</Button> : <Button className="text-white" component={Link} to="/login">Login</Button>

  return (
    <AppBar position="static" className="text-white">
      <Toolbar>
        <Menu />       
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href={getLinkPath(path)} className="text-white">
            Alaya Full Stack Challange | {getLinkText(path)}
          </Link>
        </Typography>
        {rightButton}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;