import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';

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

  addUser = data => {
    const newAbonent = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newAbonent],
    }));
  };

  handleSearchChange = e => {
    console.log(e);
    const { contacts, filter } = this.state;
    // this.setState({ filter: value });
    // const newUsers = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter)
    // );
    // return newUsers;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { number, name, filter, contacts } = this.state;
    // const newUsers = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter)
    // );
    // console.log(newUsers);

    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addUser} />
        <div>
          <h2>Contacts</h2>
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
