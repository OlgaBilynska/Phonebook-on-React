import React from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';

const Contacts = ({ contactList, onDeleteContact }) => {
  console.log('contact', contactList);
  //   const contactId = nanoid();
  return (
    <div>
      <ul>
        <Contact list={contactList} deleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};

export default Contacts;
