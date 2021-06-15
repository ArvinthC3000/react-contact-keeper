import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Tony Stark',
        email: 'i.pay@avengers.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Steve Rogers',
        email: 'ex.captain@avengers.com',
        phone: '111-111-1111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Thor Odinson',
        email: 'thunder.god@midgard.com',
        phone: '111-111-1111',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //   Add contact
  const addContact = contact => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //   Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //   Set current contact

  //   Clear current contact

  //   Update current contact

  //   Filter contacts

  //   Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
