import React from 'react';
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

export default Contacts;
