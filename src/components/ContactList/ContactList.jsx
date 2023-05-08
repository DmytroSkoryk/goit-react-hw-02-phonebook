import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact  } = this.props;
    return (
      <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          {name}: {number}
          <button className={css.delBtn} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;