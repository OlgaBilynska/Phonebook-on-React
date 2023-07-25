import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import { ContactList } from './Contacts.styled';

const Contacts = ({ contactList, onDeleteContact }) => {
  return (
    <div>
      <ContactList>
        <Contact list={contactList} deleteContact={onDeleteContact} />
      </ContactList>
    </div>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};

export default Contacts;
