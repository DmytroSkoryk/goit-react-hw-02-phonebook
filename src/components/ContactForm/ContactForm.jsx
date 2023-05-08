import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

class ContactForm extends React.Component {
state = {
       contacts: [],
       name: '',
       number: ''
};

nameInputId = nanoid();

hendleNameChange = event =>{
       this.setState({ name: event.currentTarget.value })
      };
hendleNumberChange = event =>{
       this.setState({ number: event.currentTarget.value })

      };
      
hendleSubmit = event => {
        event.preventDefault()
        const newContact = {
              id: nanoid(),
              name: this.state.name,
              number: this.state.number
            };
            this.props.onSubmit(newContact);
            this.reset();
      }
      
reset = () => {
       this.setState({ name: '', number: '' })
}
render () {

   return <form onSubmit={this.hendleSubmit} className={css.phonebookForm}>
              <label htmlFor={this.nameInputId} className={css.nameForm}>
                     <h2 className={css.nameTitle}>Name</h2>
                     <input
                            className={css.inputName}
                            type="text"
                            name="name"
                            id = {this.nameInputId}
                            value={this.state.name}
                            onChange={this.hendleNameChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required/>
                           

              </label>
              <label className={css.addForm}>
                     <h2 className={css.numberTitle}>Number</h2>
                     <input
                            className={css.inputNumber}
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.hendleNumberChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                     />
              </label>
              <button type="submit" className={css.addBtn}>Add contact</button>
          </form>
};
};

ContactForm.propTypes = {
       onSubmit: PropTypes.func.isRequired
     };

export default ContactForm;