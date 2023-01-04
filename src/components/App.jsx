import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addUser = data => {
    const findExistsName = this.state.contacts.some(
      contact => contact.name === data.name
    );
    if (findExistsName) {
      Notify.warning(`${data.name} is already in contacts`);
      return;
    } else {
      const newAbonent = {
        id: nanoid(),
        ...data,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newAbonent],
      }));
    }
  };

  handleSearch = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
    return;
  };

  render() {
    const { contacts, filter } = this.state;
    const newUsers = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(newUsers);

    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addUser} />
        <div>
          <h2>Contacts</h2>
          <Filter filterValue={filter} onSearch={this.handleSearch} />
          <ContactList
            users={newUsers}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
    })
  ),
};

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.string.isRequired,
// };
