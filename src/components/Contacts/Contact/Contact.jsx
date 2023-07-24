import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ list, deleteContact }) => {
  console.log('list', list);
  return list.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
};

Contact.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};

export default Contact;
