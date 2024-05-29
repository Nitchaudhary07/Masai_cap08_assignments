import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';

const TicketCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.post('http://localhost:5000/tickets', { title, description, assignee, status, priority })
      .then(() => navigate('/tickets'));
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <FormLabel>Description</FormLabel>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <FormLabel>Assignee</FormLabel>
        <Input value={assignee} onChange={(e) => setAssignee(e.target.value)} />
        <FormLabel>Status</FormLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <FormLabel>Priority</FormLabel>
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {[...Array(10).keys()].map(n => <option key={n} value={n}>{n}</option>)}
        </Select>
        <Button mt={4} onClick={handleSubmit}>Create Ticket</Button>
      </FormControl>
    </Box>
  );
};

export default TicketCreate;
