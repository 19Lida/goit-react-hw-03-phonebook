import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangingInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          this.props.onHandleSubmit(this.state);
          this.clearForm();
        }}
      >
        <label className={styles.inputBlock}>
          Name
          <input
            onChange={this.onChangingInput}
            value={this.state.name}
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.inputBlock}>
          Number
          <input
            onChange={this.onChangingInput}
            value={this.state.number}
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
