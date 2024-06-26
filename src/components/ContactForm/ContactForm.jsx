import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContactsThunk } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, add name'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Please, add phone'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={s.form}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" component="span" />
          <label htmlFor={phoneId}>Number</label>
          <Field type="number" name="number" id={phoneId} />
          <ErrorMessage className={s.error} name="number" component="span" />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
