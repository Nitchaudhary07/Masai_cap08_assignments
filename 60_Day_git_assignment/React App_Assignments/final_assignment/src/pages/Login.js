import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://reqres.in/api/users?page=2', { email, password });
      login(res.data.token);
      navigate('/');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button mt={4} onClick={handleSubmit}>Login</Button>
        {error && <Text color="red.500">{error}</Text>}
      </FormControl>
    </Box>
  );
};

export default Login;
