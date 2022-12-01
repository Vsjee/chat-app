import styled from 'styled-components';

const LogoutWrapper = styled.button`
  padding: 0;
  background: none;

  .logout__icon {
    width: 30px;
    height: 30px;
    transition: 0.4s ease-in;

    &:hover {
      color: #9c6bba;
    }
  }
`;

export default LogoutWrapper;
