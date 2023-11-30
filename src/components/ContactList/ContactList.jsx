import css from './ContactList.module.css';
import { ContactListElement } from './ContactListElement';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactListElement key={nanoid()} name={contact} />
      ))}
    </ul>
  );
};
