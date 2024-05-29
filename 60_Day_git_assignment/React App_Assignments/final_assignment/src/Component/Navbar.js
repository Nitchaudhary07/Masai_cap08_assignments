
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box bg="blue.500" p={4}>
      <Flex>
        <Link to="/">Home</Link>
        <Spacer />
        <Link to="/about">About</Link>
        <Spacer />
        <Link to="/contact">Contact</Link>
        <Spacer />
        <Link to="/tickets">Tickets</Link>
        <Spacer />
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
