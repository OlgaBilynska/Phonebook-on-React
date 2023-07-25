import React from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import { ContactList } from './Contacts.styled';

const Contacts = ({ contactList, onDeleteContact }) => {
  console.log('contact', contactList);
  //   const contactId = nanoid();
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
