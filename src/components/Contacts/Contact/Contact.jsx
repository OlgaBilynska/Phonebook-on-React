import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactContainer } from './Contact.styled';
import { Button } from 'components/Button/Button';

const Contact = ({ list, deleteContact }) => {
  return list.map(({ id, name, number }) => (
    <ContactContainer key={id}>
      <ContactItem>
        {name} : {number}
      </ContactItem>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ContactContainer>
  ));
};

Contact.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};

export default Contact;
