import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import {
  FormWrapper,
  ButtonBigger,
  Label,
  ErrorMessageForm,
  FieldForm,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

const ContactForm = ({ onSubmit }) => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    const idGen = nanoid();
    const contact = { id: idGen, ...values };
    onSubmit(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <Label htmlFor={inputNameId}>
          Name
          <FieldForm
            name="name"
            id={inputNameId}
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessageForm name="name" component="div" />
        </Label>

        <Label htmlFor={inputNumberId}>
          Number
          <FieldForm
            name="number"
            id={inputNumberId}
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessageForm name="number" component="div" />
        </Label>

        <ButtonBigger type="submit">Add contact</ButtonBigger>
      </FormWrapper>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
