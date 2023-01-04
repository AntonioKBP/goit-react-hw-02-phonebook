import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;
    return (
      <>
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
                placeholder="Enter Name"
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
                placeholder="Enter Phone Number"
              />
            </label>
          </div>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
