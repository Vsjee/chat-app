import { ContactInfo } from '@/models';
import { contactsKey } from '@/redux/state/contacts';
import ContactCard from './ContactCard/ContactCard';
import ContactListWrapper from './ContactsListWrapper.css';

function ContactsList() {
  const contacts = JSON.parse(localStorage.getItem(contactsKey) as string);
  return (
    <ContactListWrapper>
      <article>
        <h3>Contacts</h3>
        <h3>{contacts?.res.length}</h3>
      </article>
      {contacts?.res.map((item: ContactInfo) => {
        return <ContactCard info={item} key={item.id} />;
      })}
    </ContactListWrapper>
  );
}

export default ContactsList;
