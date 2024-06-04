import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./ContactFormEdit.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/contacts/operations";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { ContactFormValues, ContactFormEditeProps } from "../../types/types";
import { AppDispatch } from "../../redux/store";

export default function ContactFormEdit({
  contactId,
  handleClose,
}: ContactFormEditeProps) {
  const dispatch: AppDispatch = useDispatch();
  const nameId = useId();
  const phoneNumberId = useId();
  const initialValues: ContactFormValues = {
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
    dispatch(patchContact({ contactId, updatedContact: values }))
      .unwrap()
      .then(() => {
        toast.success("Edit contact all readi!!!");
      })
      .catch(() => {
        toast.error("No edit contact, try aegean");
      });
    actions.resetForm();
    handleClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.conteiner}>
          <label className={css.label} htmlFor={phoneNumberId}>
            Number
          </label>
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
            <FaEdit className={css.icon} />
            Edit contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
