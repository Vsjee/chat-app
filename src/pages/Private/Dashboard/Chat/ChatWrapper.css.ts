import styled from 'styled-components';

const ChatWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  .chat {
    padding: 0 1rem 1rem 1rem;

    .chat__container {
      width: 100%;
      height: 75vh;
      margin: 0 0 1rem 0;
    }

    .chat__container__msg {
      padding-bottom: 2rem;
      width: 100%;
      height: 75vh;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: end;
      list-style: none;
      gap: 1rem;
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
    }
  }

  .chat__input {
    padding: 0.5rem;
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
