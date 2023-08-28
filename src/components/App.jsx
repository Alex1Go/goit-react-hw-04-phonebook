import { Title } from "./Title/TitlePhone";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect, useState } from "react";

import css from './App.module.css';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('phone-contact')) || [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getLocalStorage);
  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem('phone-contact', JSON.stringify(contacts))
  }, [contacts])
  
  const  addContact = newContact => {
  const isExist = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    if (isExist) {
        alert(`${newContact.name} is already in contacts.`);
        return
      };
    setContacts(prevState => [...prevState, newContact]);
  };

  const  filterContact = e => {
    setFilter(e.target.value);
  };

  const  deleteContact = contactId => {
  setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  }; 

  const realItemContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  
     return (
      <div className={css.phone}>
        <Title title="Phonebook" />
        <ContactForm onAdd={addContact} />
        <Title title="Contacts" />
       <Filter value={filter}  onFilter={filterContact} />
        <ContactList   contacts={realItemContacts} onDeleteContact={deleteContact}/>
      </div>
    );
}
