import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactsEditor } from 'components/ContactsEditor/ContactsEditor';

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

  handelSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
      name: '',
      number: '',
    }));
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <GlobalStyle />
        <h2>Phonebook</h2>
        <ContactsEditor onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number} <button>Delete</button>
              </li>
            );
          })}
        </ul>
        {/* <LoginForm /> */}
        {/* <ProductReviewForm /> */}
      </>
    );
  }
}
