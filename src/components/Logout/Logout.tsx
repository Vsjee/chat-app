import { removeContacts } from '@/redux/state/contacts';
import { removeUser } from '@/redux/state/users';
import { IoMdExit } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import LogoutWrapper from './LogoutWrapper.css';

function Logout() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    dispatch(removeContacts());
  };

  return (
    <LogoutWrapper onClick={logout}>
      <IoMdExit className="logout__icon" />
    </LogoutWrapper>
  );
}

export default Logout;
