import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.state.contacts.push(this.state.name);
    console.log(this.state);
    this.setState({ name: '' });
    // evt.target.reset();
    console.log(this.state.name);
  };

  // reset = evt => {
  //   evt.reset();
  // };

  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
