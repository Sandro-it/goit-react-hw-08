import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts, selectIsLoading } from "../redux/contacts/selectors";

import css from "./ContactsPage.module.css";
import DocTitle from "../components/docTitle/DocTitle";
import ContactList from "../components/contactList/ContactList";
import SearchBox from "../components/searchBox/SearchBox";
import ContactForm from "../components/contactForm/ContactForm";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      <DocTitle>Your contact list</DocTitle>
      <div className={css.sidebar}>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={css.contactsSection}>
        {isLoading && <Loader />}
        {Array.isArray(contacts) &&
          (contacts.length > 0 ? (
            <ContactList />
          ) : (
            <ErrorMessage
              message={"There's no contacts in your contactsbook yet"}
            />
          ))}
      </div>
    </div>
  );
};

export default Contacts;
