import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';
import axios from 'axios';

const TicketView = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tickets/${id}`).then((res) => setTicket(res.data));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/tickets/${id}`).then(() => navigate('/tickets'));
  };

  return (
    <Box>
      <Heading>{ticket.title}</Heading>
      <p>Description: {ticket.description}</p>
      <p>Assignee: {ticket.assignee}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <Button as={Link} to={`/edit-ticket/${id}`}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

export default TicketView;
