import ChatNavWrapper from './ChatNavWrapper.css';
import { BiMenuAltRight } from 'react-icons/bi';

interface Props {
  contact: {
    name: string;
    image: string;
  };
}

function ChatNav({ contact }: Props) {
  return (
    <ChatNavWrapper>
      <ul className="list">
        <li className="list__profile">
          <picture className="profile__picture">
            <img src={contact.image} alt={contact.name} width={80} />
          </picture>
          <p>{contact.name}</p>
        </li>
        <li className="menu">
          <button className="list__btn">
            <BiMenuAltRight className="list__btn__icon" />
          </button>
        </li>
      </ul>
    </ChatNavWrapper>
  );
}

export default ChatNav;
