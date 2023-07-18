import React from 'react';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

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
    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
    console.log('state', this.state.contacts);
  };

  // isContactExist = contactName => {
  //   console.log('contactId', contactName);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.map(
  //       contact =>
  //         (contact.name = contactName
  //           ? alert('is already in contacts.')
  //           : contact)
  //     ),
  //   }));
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // formSubmitHandler = data => {
  //   const contacts = this.state.contacts;
  //   contacts.find(contact =>
  //     contact.name === data.name
  //       ? alert('is already in contacts.')
  //       : this.setState(prevState => ({
  //           contacts: [data, ...prevState.contacts],
  //         }))
  //   );
  // };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const contactCount = contacts.length;
    const completedContacts = contacts.reduce(
      (total, contact) => (contact ? total + 1 : total),
      0
    );

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          onContactExist={this.isContactExist}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <Contacts
          contactList={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <p>Number of contacts: {contactCount}</p>
        <p>Completed contacts: {completedContacts}</p>
      </div>
    );
  }
}
