import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';

const TicketEdit = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tickets/${id}`).then((res) => setTicket(res.data));
  }, [id]);

  const handleSubmit = () => {
    axios.put(`http://localhost:5000/tickets/${id}`, ticket).then(() => navigate('/tickets'));
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input value={ticket.title || ''} onChange={(e) => setTicket({ ...ticket, title: e.target.value })} />
        <FormLabel>Description</FormLabel>
        <Textarea value={ticket.description || ''} onChange={(e) => setTicket({ ...ticket, description: e.target.value })} />
        <FormLabel>Assignee</FormLabel>
        <Input value={ticket.assignee || ''} onChange={(e) => setTicket({ ...ticket, assignee: e.target.value })} />
        <FormLabel>Status</FormLabel>
        <Select value={ticket.status || ''} onChange={(e) => setTicket({ ...ticket, status: e.target.value })}>
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <FormLabel>Priority</FormLabel>
        <Select value={ticket.priority || 0} onChange={(e) => setTicket({ ...ticket, priority: parseInt(e.target.value, 10) })}>
          {[...Array(10).keys()].map(n => <option key={n} value={n}>{n}</option>)}
        </Select>
        <Button mt={4} onClick={handleSubmit}>Edit Ticket</Button>
      </FormControl>
    </Box>
  );
};

export default TicketEdit;
