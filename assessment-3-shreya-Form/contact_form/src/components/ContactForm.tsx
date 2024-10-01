import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addContact, updateContact } from '../redux/contactsSlice';
import { RootState } from '../redux/store';
import { Contact } from '../types';
import '../styles/ContactForm.css';

// No need to define a Params interface

const ContactForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Use inline type definition
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingContact = useSelector((state: RootState) => state.contacts.contacts.find(contact => contact.id === id));

  const [formData, setFormData] = useState<Contact>({
    id: id || Math.random().toString(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    addressType: 'Home',
    address: '', // New field for address
  });

  useEffect(() => {
    if (existingContact) {
      setFormData(existingContact);
    }
  }, [existingContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddressTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, addressType: e.target.value as 'Home' | 'Office', address: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingContact) {
      dispatch(updateContact(formData));
    } else {
      dispatch(addContact(formData));
    }
    navigate('/');
  };

  const isFormValid = () => {
    const { firstName, lastName, phone, email, address } = formData;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      firstName &&
      lastName &&
      phoneRegex.test(phone) &&
      emailRegex.test(email) &&
      address
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Address Type</label>
        <input type="radio" name="addressType" value="Home" checked={formData.addressType === 'Home'} onChange={handleAddressTypeChange} /> Home-Address
        <input type="radio" name="addressType" value="Office" checked={formData.addressType === 'Office'} onChange={handleAddressTypeChange} /> Office-Address
      </div>
      {formData.addressType && (
        <div>
          <label>{formData.addressType} Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
      )}
      <div>
        <button type="button" onClick={() => navigate('/')}>Back</button>
        <button type="submit" disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;