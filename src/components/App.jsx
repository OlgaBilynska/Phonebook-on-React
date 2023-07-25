import React from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  countContacts = () => {
    const { contacts } = this.state;
    return contacts.reduce(
      (total, contact) => (contact ? total + 1 : total),
      0
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const contactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={this.changeFilter} />

        <Contacts
          contactList={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <ContactTotal>Number of contacts: {contactCount}</ContactTotal>
      </Container>
    );
  }
}
