import styled from 'styled-components';

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* background-color: #9c6bba; */

  .contactList__nav {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 5%;
    box-shadow: rgba(33, 35, 38, 0.2) 0 1px 20px 0;
    position: absolute;
    width: 40%;
    background-color: #fff;

    button {
      display: grid;
      align-items: center;
      cursor: pointer;
      border: none;
      border-radius: 50px;
      background: none;

      .contactList__nav__profile {
        width: 35px;
        height: 35px;
        transition: 0.4s ease-in;

        &:hover {
          color: #9c6bba;
        }
      }
    }
  }

  .contactList {
    overflow: scroll;
    width: 40%;
  }

  .outlet {
    width: 60%;
    background-color: #9c6bba;
  }

  @media screen and (max-width: 768px) {
    .contactList,
    .contactList__nav {
      transition: 0.5s ease-in;
      width: 100%;
    }

    .outlet {
      width: 0%;
    }
  }
`;

export default DashboardWrapper;
