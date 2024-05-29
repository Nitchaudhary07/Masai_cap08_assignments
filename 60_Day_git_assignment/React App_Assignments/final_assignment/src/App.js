import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import TicketView from './pages/TicketView';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import Login from './pages/Login';

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/tickets" element={isLoggedIn ? <Tickets /> : <Navigate to="/login" />} />
        <Route path="/tickets/:id" element={isLoggedIn ? <TicketView /> : <Navigate to="/login" />} />
        <Route path="/create-ticket" element={isLoggedIn ? <TicketCreate /> : <Navigate to="/login" />} />
        <Route path="/edit-ticket/:id" element={isLoggedIn ? <TicketEdit /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
