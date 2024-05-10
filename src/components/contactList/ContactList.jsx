import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <div className={css.contactsItem} key={nanoid()}>
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
