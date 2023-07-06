import { useSelector } from 'react-redux';
import { Toolbar, AppBar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Navbar({ activeSection }) {
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  const user = useSelector(state => state.auth.user);
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

  const rightButton = isAuthenticated ? <Button color="inherit">Wellcome {user.username}</Button> : <Button className="text-white" component={Link} to="/login">Login</Button>
  console.log(isAuthenticated);
  return (
    <AppBar position="static" className="text-white">
      <Toolbar>
        <Menu />       
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href={getLinkPath(activeSection)} className="text-white">
            Alaya Full Stack Challange | {getLinkText(activeSection)}
          </Link>
        </Typography>
        {rightButton}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;