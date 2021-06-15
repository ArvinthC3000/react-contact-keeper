import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const ContactState = props => {
  const initialState = {
    contact: [
      {
        id: 1,
        name: 'Tony Stark',
        email: 'sponser@avengers.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Steve Rogers',
        email: 'captain@avengers.com',
        phone: '111-111-1111',
        type: 'personal',
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

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add contact

  //   Delete contact

  //   Set current contact

  //   Clear current contact

  //   Update current contact

  //   Filter contacts

  //   Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
