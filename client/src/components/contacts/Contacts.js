import React, { useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (!contacts.length) return <h4>No contacts found. Add new</h4>;
  //   if (filtered) return <h4>No contacts found. Add new</h4>;

  return (
    <>
      {filtered
        ? filtered.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </>
  );
};

export default Contacts;
