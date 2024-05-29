import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Button, Select } from '@chakra-ui/react';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tickets').then((res) => setTickets(res.data));
  }, []);

  const handleSort = (e) => {
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sort === 'Low to High') return a.priority - b.priority;
      if (sort === 'High to Low') return b.priority - a.priority;
      return 0;
    });
    setTickets(sortedTickets);
    setSort(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box>
      <Button as={Link} to="/create-ticket">Create Ticket</Button>
      <Select placeholder="Sort by Priority" onChange={handleSort}>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </Select>
      <Select placeholder="Filter by Status" onChange={handleFilter}>
        <option value="Pending">Pending</option>
        <option value="Progress">Progress</option>
        <option value="Completed">Completed</option>
      </Select>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        {tickets.filter(ticket => filter ? ticket.status === filter : true).map((ticket) => (
          <Box key={ticket.id} p={5} shadow="md" borderWidth="1px">
            <h3>{ticket.title}</h3>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
            <Button as={Link} to={`/tickets/${ticket.id}`}>View</Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Tickets;
