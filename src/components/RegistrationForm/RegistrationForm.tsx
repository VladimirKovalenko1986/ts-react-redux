import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { FaCashRegister } from "react-icons/fa";
import { AppDispatch } from "../../redux/store";
import { RegistrationFomValues } from "../../types/types";

export default function RegistrationForm() {
  const dispatch: AppDispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const initialValues: RegistrationFomValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: RegistrationFomValues,
    actions: FormikHelpers<RegistrationFomValues>
  ) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Welcome, registration was successful");
      })
      .catch(() => {
        toast.error("Please check the entered data!");
      });
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Username must be at least 2 characters")
      .max(50, "Username must be less than 50 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Username
        </label>
        <Field className={css.input} type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field className={css.input} type="email" name="email" id={emailId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordId}
        />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.button} type="submit">
          <FaCashRegister className={css.icon} />
          Register
        </button>
      </Form>
    </Formik>
  );
}
