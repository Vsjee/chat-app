import styled from 'styled-components';

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 10%;
    /* background-color: #9c6bba; */

    button {
      cursor: pointer;
      margin-right: 20px;
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
