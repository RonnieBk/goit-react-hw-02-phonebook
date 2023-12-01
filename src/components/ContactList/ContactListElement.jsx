import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactListElement = ({ name, number, id, onClick }) => {
  return (
    <li id={id} className={css.list}>
      {name}: {number}{' '}
      <button type="button" className={css.btnDelete} onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
