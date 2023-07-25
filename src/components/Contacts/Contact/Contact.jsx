import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './Contact.styled';

const Contact = ({ list, deleteContact }) => {
  console.log('list', list);
  return list.map(({ id, name, number }) => (
    <ContactItem key={id}>
      {name} : {number}
      <ButtonDelete type="button" onClick={() => deleteContact(id)}>
        Delete
      </ButtonDelete>
    </ContactItem>
  ));
};

Contact.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};

export default Contact;
