import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteContact } from '../redux/contactsSlice';
import { Contact } from '../types';
import '../styles/ContactTile.css';

interface ContactTileProps {
  contact: Contact;
}

const ContactTile: React.FC<ContactTileProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <div className="contact-tile">
      <div className="contact-info">
        <p>{contact.firstName} {contact.lastName}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <p>{contact.addressType}</p>
        <p>{contact.address}</p>
      </div>
      <div className="contact-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ContactTile;
