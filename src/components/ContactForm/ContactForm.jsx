import css from './ContactForm.module.css';

export const ContactForm = ({ name, onChange, onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label htmlFor="name" className={css.formLabel}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.formInput}
        id="name"
        value={name}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {/* <label htmlFor="phone" className={css.formLabel}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="phone"
        value={number}
        className={css.formInput}
        onChange={onChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      /> */}
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
