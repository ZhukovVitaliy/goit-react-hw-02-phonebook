import { Component } from 'react';
import { nanoid } from 'nanoid';

const nameInputId = nanoid();
const numberInputId = nanoid();

export class ContactsEditor extends Component {
  state = {
    name: '',
    number: '',
  };
  //this.props.onSubmit

  handelSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.onSubmit(newContact);

    this.setState({ name: '', number: '' });
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form autoComplete="off" onSubmit={this.handelSubmit} action="">
        <label htmlFor={nameInputId}>
          Name
          <input
            id={nameInputId}
            onChange={this.handelChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label htmlFor={numberInputId}>
          Number
          <input
            id={numberInputId}
            onChange={this.handelChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
