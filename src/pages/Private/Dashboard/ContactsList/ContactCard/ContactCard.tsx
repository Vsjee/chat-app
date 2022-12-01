import { ContactInfo } from '@/models';
import ContactCardWrapper from './ContactCard.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Props {
  info: ContactInfo;
}

function ContactCard({ info }: Props) {
  return (
    <ContactCardWrapper>
      <Link to={`${info.id}`}>
        <picture className="picture">
          <img src={info.image} alt={info.name} width={80} />
        </picture>
        <p>{info.name}</p>
        <button className="btn">
          <MdKeyboardArrowRight className="btn__icon" />
        </button>
      </Link>
    </ContactCardWrapper>
  );
}
export default ContactCard;
