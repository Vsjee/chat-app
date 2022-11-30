import { PrivateRoutes } from '@/models/routes';
import { createUser } from '@/redux/state/users';
import { getRick } from '@/services/getRick';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginWrapper from './LoginWrapper.css';
import GroupChat from '../../assets/GroupChat.svg';
import { getContacts } from '@/services/getContacts';
import { createContacts } from '@/redux/state/contacts';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const resUser = await getRick();
      const resContacts = await getContacts();
      dispatch(createUser({ ...resUser }));
      dispatch(createContacts([...resContacts.results]));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <nav className="nav">
        <h2>ChatApp</h2>
        <button onClick={login}>Login</button>
      </nav>
      <picture className="picture">
        <img src={GroupChat} alt="group team" width={500} />
      </picture>
    </LoginWrapper>
  );
}

export default Login;
