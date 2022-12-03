import styled from 'styled-components';

const LoginWrapper = styled.section`
  background-image: radial-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)),
    url(https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #fff;

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 10%;
    margin-bottom: 2rem;
    background-color: linear-gradient(rgba(255, 255, 255, 0.8), rgba(144, 142, 143, 1)), #fff;
    backdrop-filter: blur(10px);

    h2 {
      color: #fff;
      opacity: 1;
    }

    button {
      cursor: pointer;
      background-color: #9c6bba;
      color: #fff;
      padding: 0.6rem;
      margin-right: 20px;
      font-family: inherit;
      font-weight: 900;
      border-radius: 16px;
      border: none;
      transition: 0.4s ease-in;

      &:hover {
        background-color: #fff;
        color: #9c6bba;
      }
    }
  }

  .picture {
    height: 80vh;
    display: grid;
    place-content: center;

    img {
      display: block;
      margin: 0 auto;
      width: 75%;
    }
  }
`;

export default LoginWrapper;
