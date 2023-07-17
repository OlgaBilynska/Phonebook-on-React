import React from 'react';
// import { nanoid } from 'nanoid';

const Contacts = ({ contactList }) => {
  console.log('contact', contactList);
  //   const contactId = nanoid();
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contactList.map(contact => (
          <li>
            {contact.name} : {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
