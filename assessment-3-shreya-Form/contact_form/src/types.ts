export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  addressType: 'Home' | 'Office';
  address: string; 
}