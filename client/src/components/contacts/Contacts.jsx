import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts !== null && !contacts.length && !loading)
    return <h4>No contacts found. Add new</h4>;
  //   if (filtered) return <h4>No contacts found. Add new</h4>;

  return (
    <>
      {contacts == null && !loading ? (
        <Spinner />
      ) : (
        <TransitionGroup>
          {filtered != null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={200}
                  classNames='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      )}
    </>
  );
};

export default Contacts;
