import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ContactTile from './ContactTile';
import '../styles/ContactList.css';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactTile key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;