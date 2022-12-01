import styled from 'styled-components';

const ChatWrapper = styled.section`
  color: #fff;

  article {
    background-image: radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    height: 89.4vh;
  }

  .chat {
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
    }
  }

  .chat__input {
    padding: 0.3rem;
    border: none;
    border-radius: 15px;
    width: 60%;
  }

  .chat__btn {
    cursor: pointer;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 50px;
    border: none;

    .chat__btn__icon {
      width: 30px;
      height: 30px;

      &:hover {
        color: #9c6bba;
      }
    }
  }
`;

export default ChatWrapper;
