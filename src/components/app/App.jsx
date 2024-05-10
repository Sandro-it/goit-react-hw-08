import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import ContactForm from "../contactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ContactList />
    </div>
  );
};

export default App;
