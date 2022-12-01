import { UserInfo } from '@/models';
import { contactsKey } from '@/redux/state/contacts';
import { useParams } from 'react-router-dom';
import ChatNav from './ChatNav/ChatNav';
import ChatWrapper from './ChatWrapper.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import React from 'react';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

function Chat() {
  const contacts = JSON.parse(localStorage.getItem(contactsKey) as string);
  const { contactId } = useParams();
  const contact = contacts?.res.find((item: UserInfo) => String(item.id) === contactId);

  return (
    <ChatWrapper>
      <ChatNav contact={contact} />
      <article className="chat" onSubmit={handleSubmit}>
        <form action="">
          <input type="text" className="chat__input" placeholder="enter a message..." />
          <button className="chat__btn" type="submit">
            <MdKeyboardArrowRight className="chat__btn__icon" />
          </button>
        </form>
      </article>
    </ChatWrapper>
  );
}
export default Chat;
