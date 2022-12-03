import styled from 'styled-components';

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;

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
    background-image: radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-repeat: no-repeat;
    color: #fff;
    background-size: cover;
    width: 60%;
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
