// import ProtoTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { contactsOperations } from '../../redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const onSubmit = (name, number) => {
    dispatch(contactsOperations.addContact(name, number));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.form__label}>
        Name
        <input
          className={styles.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={styles.form__label}>
        Number
        <input
          className={styles.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

// ContactForm.propTypes = { onSubmit: ProtoTypes.func.isRequired };
