import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.itrm} key={id}>
          <p className={css.name}>{name}: {number}</p>
          <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}