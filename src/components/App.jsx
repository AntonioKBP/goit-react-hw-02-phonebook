import { Component } from 'react';
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
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSearchChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.contacts.push(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name, filter, contacts } = this.state;
    const newUsers = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    console.log(newUsers);

    return (
      <>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">
              <p>Name</p>
              <input
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
            </label>
            <label>
              <p>Number</p>
              <input
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <p>Contacts</p>
          <label>
            <p>Find contacts by name</p>
            <input
              type="text"
              value={filter}
              name="filter"
              onChange={this.handleSearchChange}
            />
          </label>
          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={nanoid()}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
