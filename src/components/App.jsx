import React from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
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
  // isContactExist = contactName => {
  //   console.log('contactId', contactName);
  //   if (this.state.contacts.find(contact => contact.name === contactName)) {
  //     console.log('is already in contacts.');
  //   } else {
  //     this.formSubmitHandler();
  //   }
  // };

  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.map(contact => {
  //       console.log('contact.name :>> ', contact.name);
  //       return (contact.name === contactName
  //         ? console.log('is already in contacts.')
  //         : contact);
  //     }),
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
    // const completedContacts = this.countContacts();
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          // onContactExist={this.isContactExist}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <Contacts
          contactList={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <p>Number of contacts: {contactCount}</p>
        {/* <p>Total contacts: {completedContacts}</p> */}
      </div>
    );
  }
}
