import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  //   state = {
  //     name: '',
  //     number: '',
  //   };

  //   nameInputId = nanoid();
  //   numberInputId = nanoid();

  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;

  //     this.setState({ [name]: value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     // const contactID = nanoid();
  //     // const contact = { id: contactID, ...this.state };
  //     this.props.onSubmit(this.state);
  //     // this.props.onContactExist(this.state.name);
  //     this.reset();
  //   };

  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  //   render() {
  //     return (
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            // value={this.state.name}
            name="name"
            // id={this.nameInputId}
            // onChange={this.handleChange}
            type="text"
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <br />
        <label htmlFor="password">
          Number
          <Field
            // value={this.state.number}
            name="number"
            // id={this.numberInputId}
            // onChange={this.handleChange}
            type="tel"
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
