// import { Component } from "react"
// import { Title } from "./Title/TitlePhone";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./ContactList/ContactList";

// import css from './App.module.css'

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
  
//   };

  // componentDidMount() { 
  //   const savedContacts = localStorage.getItem('phone-contact');
  //   if (savedContacts !== null) {
  //     this.setState({
  //       contacts: JSON.parse(savedContacts),
  //     });
  //   }
  // };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('phone-contact', JSON.stringify(this.state.contacts))
//     }
//    };

//   addContact = newContact => {
//     const isExist = this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
//     if (isExist) {
//         alert(`${newContact.name} is already in contacts.`);
//         return
//       };
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, newContact],
//       };
//     });
//   };

//   filterContact = e => {
//     this.setState({
//         filter: e.target.value,
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//       };
//     });
//   };

//   render() {
//     console.log('render')
//     const { contacts } = this.state;
//     const realItemContacts = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));

    // return (
    //   <div className={css.phone}>
    //     <Title title="Phonebook" />
    //     <ContactForm onAdd={this.addContact} />
    //     <Title title="Contacts" />
    //    <Filter value={this.state.filter}  onFilter={this.filterContact} />
    //     <ContactList   contacts={realItemContacts} onDeleteContact={this.deleteContact}/>
    //   </div>
    // );
//   };
// }
