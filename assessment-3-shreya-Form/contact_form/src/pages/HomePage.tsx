import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';
import '../styles/HomePage.css'
const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/contact">Add New Contact</Link>
      <ContactList />
    </div>
  );
};

export default HomePage;