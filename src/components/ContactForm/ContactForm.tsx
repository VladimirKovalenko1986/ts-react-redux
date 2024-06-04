import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { IoPersonAdd } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { ContactFormValues } from "../../types/types";
import { AppDispatch } from "../../redux/store";

const ContactForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const nameId = useId();
  const phoneNumberId = useId();

  const initialValues: ContactFormValues = {
    id: "",
    name: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Toshort!")
      .max(50, "Too long!")
      .required("Requared"),
    number: Yup.string()
      .min(3, "Toshort!")
      .max(50, "Too long!")
      .required("Requared"),
  });

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Add new contact");
      })
      .catch(() => {
        toast.error("Please check the entered data!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.conteiner}>
          <label htmlFor={phoneNumberId}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={phoneNumberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div>
          <button type="submit" className={css.button}>
            <IoPersonAdd className={css.icon} />
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
