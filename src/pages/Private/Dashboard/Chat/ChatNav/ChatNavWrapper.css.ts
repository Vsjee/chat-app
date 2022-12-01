import styled from 'styled-components';

const ChatNavWrapper = styled.nav`
  padding: 0.5rem 2%;
  background-color: black;

  .list {
    list-style: none;
    display: flex;
    justify-content: space-between;

    .list__profile {
      display: inline-flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      .profile__picture {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50px;
        }
      }
    }

    .menu {
      display: grid;
      place-items: center;

      .list__btn {
        padding: 0;
        display: grid;
        place-items: center;
        background: none;
        border: none;

        .list__btn__icon {
          cursor: pointer;
          color: #fff;
          width: 30px;
          height: 30px;
          transition: 0.4s ease-in;

          &:hover {
            color: #9c6bba;
          }
        }
      }
    }
  }
`;

export default ChatNavWrapper;
