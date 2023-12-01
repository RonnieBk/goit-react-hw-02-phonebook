import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    const original = [...this.state.contacts];
    this.setState({ filter: value });
    const findContacts = [];
    const searchValue = value.toLowerCase();

    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase().includes(searchValue)) {
        findContacts.push(contact);
      }
    }

    if (!this.state.filter) {
      this.setState({ contacts: original });
    } else this.setState({ contacts: findContacts });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    const foundContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (foundContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else this.setState({ contacts: [...this.state.contacts, newContact] });
    form.reset();
  };

  handleClick = evt => {
    const originalContacts = [...this.state.contacts];
    const elementToDelete = evt.target.parentNode;
    const elementIndex = this.state.contacts.findIndex(
      contact => contact.id === elementToDelete.id
    );
    originalContacts.splice(elementIndex, 1);

    this.setState({ contacts: originalContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div style={{ padding: '30px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList contacts={contacts} onClick={this.handleClick} />
      </div>
    );
  }
}
