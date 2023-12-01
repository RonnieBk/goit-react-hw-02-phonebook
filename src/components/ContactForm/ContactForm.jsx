import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
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
        pattern="^[a-zA-Z]+ [a-zA-Z]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone" className={css.formLabel}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="phone"
        className={css.formInput}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
