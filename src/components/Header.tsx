
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React,{useCallback}  from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logout } from '../redux/actions/auth.actioncreator';
import { UserSelector } from '../redux/reducers/userReducer';


const Header = () => {
  //states
  const {isAuth} = useSelector(UserSelector);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  //methods to navigate
  const handleOnClickHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const handleOnClickLogin = useCallback(() => navigate('/login', {replace: true}), [navigate]);
  const handleOnClickSignUp = useCallback(() => navigate('/signup', {replace: true}), [navigate]);

  //handle menu user
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = async () =>{

    handleClose()
    await dispatch(logout())
  }



  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href='#' onClick={handleOnClickHome} >Loan Checker</Navbar.Brand>
    {  !isAuth && (
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="" onClick={handleOnClickSignUp}>Sign Up</Nav.Link>
            <Nav.Link href="" onClick={handleOnClickLogin}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    )}
    {isAuth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
  </Container>
</Navbar>  )
}

export default Header