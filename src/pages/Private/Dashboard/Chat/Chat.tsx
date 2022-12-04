import { useRef, useState } from 'react';
import { UserInfo } from '@/models';
import { contactsKey } from '@/redux/state/contacts';
import { useParams } from 'react-router-dom';
import ChatNav from './ChatNav/ChatNav';
import ChatWrapper from './ChatWrapper.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Messsage from './Messsage/Messsage';

function Chat() {
  const chatContainer = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const contacts = JSON.parse(localStorage.getItem(contactsKey) as string);
  const { contactId } = useParams();
  const contact = contacts?.res.find((item: UserInfo) => String(item.id) === contactId);

  const scrollToMyRef = () => {
    const sH = chatContainer.current?.scrollHeight !== undefined ? chatContainer.current?.scrollHeight : 0;
    const cH = chatContainer.current?.clientHeight !== undefined ? chatContainer.current?.clientHeight : 0;
    const scroll = sH - cH;
    chatContainer.current?.scrollTo(0, scroll);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return e.target.msg.value !== ''
      ? (setMessages((prev: string[]) => {
          return [e.target.msg.value, ...prev];
        }),
        scrollToMyRef())
      : (e.target.msg.value = '');
  };

  return (
    <ChatWrapper>
      <ChatNav contact={contact} />
      <article className="chat">
        <div ref={chatContainer as React.RefObject<HTMLDivElement>} className="chat__container">
          {messages.map((item, i) => (
            <Messsage msg={item} key={i} />
          ))}
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="msg" className="chat__input" placeholder="enter a message..." />
          <button className="chat__btn" type="submit">
            <MdKeyboardArrowRight className="chat__btn__icon" />
          </button>
        </form>
      </article>
    </ChatWrapper>
  );
}
export default Chat;
