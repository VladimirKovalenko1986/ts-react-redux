interface Contact {
  id: string;
  name: string;
  number: string;
}

interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: string | null;
}

interface Filters {
  name: string;
  number: string;
}

interface Auth {
  name: string | null;
  email: string | null;
}

interface AuthState {
  user: Auth;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  loading: boolean;
  error: string | null;
}

interface TitleProps {
  text: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

interface ContactFormValues {
  name: string;
  number: string;
}

interface ContactProps {
  data: Contact;
}

interface MyModalEditProps {
  contactId: string;
}

interface ContactFormEditeProps {
  contactId: string;
  handleClose: () => void;
}

interface LoginFormValues {
  email: string;
  password: string;
}

interface RegistrationFomValues {
  name: string;
  email: string;
  password: string;
}

export type {
  Contact,
  ContactsState,
  Filters,
  AuthState,
  TitleProps,
  LayoutProps,
  ContactFormValues,
  ContactProps,
  MyModalEditProps,
  ContactFormEditeProps,
  LoginFormValues,
  RegistrationFomValues,
};
