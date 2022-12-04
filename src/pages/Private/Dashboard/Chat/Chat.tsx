import { useRef, useState } from 'react';
import { UserInfo } from '@/models';
import { contactsKey } from '@/redux/state/contacts';
import { useParams } from 'react-router-dom';
import ChatNav from './ChatNav/ChatNav';
import ChatWrapper from './ChatWrapper.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Messsage from './Messsage/Messsage';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [mss, setMss] = useState('');
  const textRef = useRef<HTMLInputElement>(null);
  const contacts = JSON.parse(localStorage.getItem(contactsKey) as string);
  const { contactId } = useParams();
  const contact = contacts?.res.find((item: UserInfo) => String(item.id) === contactId);

  const msg = ['hola', 'que mas', 'bro', "what's up nigga"];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newMsg = textRef.current?.value !== null ? textRef.current?.value : null;
    console.log(newMsg);
  };

  return (
    <ChatWrapper>
      <ChatNav contact={contact} />
      <article className="chat">
        <div className="chat__container">
          <ul className="chat__container__msg">
            {msg.map((item, i) => (
              <Messsage msg={item} key={i} />
            ))}
          </ul>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input ref={textRef} type="text" name="msg" className="chat__input" placeholder="enter a message..." />
          <button className="chat__btn" type="submit">
            <MdKeyboardArrowRight className="chat__btn__icon" />
          </button>
        </form>
      </article>
    </ChatWrapper>
  );
}
export default Chat;
