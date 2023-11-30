import css from './ContactList.module.css';

export const ContactListElement = ({ name }) => {
  return <li className={css.list}>{name}:</li>;
};
