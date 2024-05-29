import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => (
  <Box>
    <Heading>Contact Us</Heading>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input placeholder="Your name" />
      <FormLabel>Email</FormLabel>
      <Input placeholder="Your email" />
      <FormLabel>Message</FormLabel>
      <Textarea placeholder="Your message" />
      <Button mt={4}>Send</Button>
    </FormControl>
  </Box>
);

export default Contact;
