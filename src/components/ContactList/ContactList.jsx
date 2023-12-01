import css from './ContactList.module.css';
import { ContactListElement } from './ContactListElement';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactListElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};
