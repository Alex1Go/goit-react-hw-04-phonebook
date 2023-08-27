import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

export const ContactForm = ({onAdd}) => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                
                onSubmit={(values, actions) => {
                    onAdd({...values, id:nanoid()});
                    actions.resetForm();
                    
                }}
            >
                <Form>
                    <label className={css.label}>Name
                        <Field className={css.input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder="Jane Snow" />
                    </label>
                    <label className={css.label}>Number
                        <Field className={css.input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="XXX-XX-XX-XXX"
                        />
                    </label>
                    <button type="submit" className={css.button}>Add contact</button>
                </Form>
            </Formik>
        </>
    );
};