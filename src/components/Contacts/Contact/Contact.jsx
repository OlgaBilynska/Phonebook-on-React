import React from 'react';

const Contact = ({ list, deleteContact }) => {
  return list.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
};

export default Contact;
